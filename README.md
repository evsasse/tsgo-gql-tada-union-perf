# `gql.tada` union-heavy typechecking repro for `tsgo`

https://github.com/microsoft/typescript-go/issues/2859

This repository is a standalone synthetic repro focused on union/discriminated type pressure from `gql.tada` query typing.

It intentionally avoids framework/runtime factors (Next.js, API calls, route typegen) and keeps the workload pure TypeScript + GraphQL schema generation + `gql.tada` typing.

## Setup

```bash
npm install
npm run schema:generate
```

Generate specific scenario families:

```bash
SCENARIO=all npm run scenario:generate
SCENARIO=monolith npm run scenario:generate
SCENARIO=fragments npm run scenario:generate
SCENARIO=ladders npm run scenario:generate
```

## Benchmark commands

All benchmark commands clear both build-info files before running:

```bash
npm run bench:once:tsc
npm run bench:once:tsgo
npm run bench:once:tsgo:single-threaded
npm run bench:once:tsgo:checkers
npm run bench:scenario:matrix
```

Looped runs (defaults to 5 iterations):

```bash
npm run bench:loop
```

Custom iteration count:

```bash
BENCH_ITERATIONS=10 npm run bench:loop
```

Collect tsgo pprof profiles (default + single-threaded):

```bash
npm run bench:pprof
```

This runs tsgo with `--pprofDir .`, then collects updated profile files into a timestamped folder:

- `benchmarks/<timestamp>-pprof/`
- contains per-command logs and `manifest.md` metadata
- includes copied profile artifacts for manual upload

## Repro shape

- Deterministic schema generated at `schema.graphql` by `scripts/genSchema.ts`
  - member/union sizes are configurable via env (for example `UNION_MEMBER_COUNT`)
  - 2 large unions (`SearchUnionA`, `SearchUnionB`)
  - union-returning query fields and container types
- Hotspot typing pressure in `src/hotspot.ts`
  - one large `gql` query over union-heavy fields
  - repeated `ResultOf` + `VariablesOf` + `Extract` + `NonNullable`
  - extra discriminated relation matrix types to increase checker pressure
- Scenario generator harness in `scripts/genScenarios.ts`
  - **Format A** monolith expression bomb (`scripts/genScenarioMonolith.ts` -> `src/scenarios/monolith.ts`)
  - **Format B** fragment DAG fanout (`scripts/genScenarioFragments.ts` -> `src/scenarios/fragments/*`)
  - **Format C** pagination/union ladders (`scripts/genScenarioLadders.ts` -> `src/scenarios/ladders.ts`)
  - scenario selection through `SCENARIO=monolith|fragments|ladders|all`

## Winning config (2x+)

The strongest/most consistent repro so far is the **fragments** scenario with very high file multiplicity:

```bash
SCENARIO=fragments \
UNION_MEMBER_COUNT=280 \
FRAGMENT_COUNT=5000 \
FRAGMENT_FANOUT=2 \
QUERY_COUNT=2 \
QUERY_SELECTION_COUNT=3 \
DISCRIM_COMBO_TARGET=40 \
npm run schema:generate
```

## Benchmark hygiene

- Always clears:
  - `tsconfig.tsbuildinfo`
  - `tsconfig.tsgo.tsbuildinfo`
- Runs all tools in same machine/session.
- Captures diagnostics fields:
  - `Types`
  - `Instantiations`
  - `Memory used`
  - `Check time`
  - `Total time`

## Observed results (5 iterations)

Source: `benchmarks/2026-02-20T20-08-50.535Z-summary.md`

| Command | Avg Check time | Avg Total time |
| --- | --- | --- |
| `bench:once:tsc` | 30.704s | 31.686s |
| `bench:once:tsgo` | 34.132s | 34.524s |
| `bench:once:tsgo:single-threaded` | 15.587s | 16.254s |
| `bench:once:tsgo:checkers` | 16.603s | 16.985s |

Requested target for this tuning pass: `bench:once:tsgo` total time is 2x `bench:once:tsgo:single-threaded`.

Observed in this current run: default `tsgo` is slower than `--singleThreaded` (`34.524s` vs `16.254s`, ratio `2.124x`).

## Raw logs

- Generated under `benchmarks/`
- Latest set:
  - `benchmarks/2026-02-20T20-08-50.535Z-summary.md`
  - per-run logs alongside that summary (one file per command/run)
- pprof capture sets:
  - `benchmarks/<timestamp>-pprof/`
  - upload files from this folder (especially `manifest.md` and the copied `*cpuprofile.pb.gz` / `*memprofile.pb.gz` files)

## Environment

- OS: Darwin 25.2.0 (`arm64`)
- CPU: Apple M2 Max
- Node: `v24.3.0`
- npm: `11.4.2`
- TypeScript: `5.9.3`
- `@typescript/native-preview`: `7.0.0-dev.20260220.1`
- `gql.tada`: `1.9.0`
- `graphql`: `16.12.0`

## Upstream context

- Issues:
  - https://github.com/microsoft/typescript-go/issues/2454
  - https://github.com/microsoft/typescript-go/issues/2551
- Related fixes:
  - https://github.com/microsoft/typescript-go/pull/2466
  - https://github.com/microsoft/typescript-go/pull/2567
