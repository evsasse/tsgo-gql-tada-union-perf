# `gql.tada` union-heavy typechecking repro for `tsgo`

This repository is a standalone synthetic repro focused on union/discriminated type pressure from `gql.tada` query typing.

It intentionally avoids framework/runtime factors (Next.js, API calls, route typegen) and keeps the workload pure TypeScript + GraphQL schema generation + `gql.tada` typing.

## Setup

```bash
npm install
npm run schema:generate
```

## Benchmark commands

All benchmark commands clear both build-info files before running:

```bash
npm run bench:once:tsc
npm run bench:once:tsgo
npm run bench:once:tsgo:single-threaded
npm run bench:once:tsgo:checkers
```

Looped runs (defaults to 5 iterations):

```bash
npm run bench:loop
```

Custom iteration count:

```bash
BENCH_ITERATIONS=10 npm run bench:loop
```

## Repro shape

- Deterministic schema generated at `schema.graphql` by `scripts/genSchema.ts`
  - 30 object members with overlapping fields
  - 2 large unions (`SearchUnionA`, `SearchUnionB`)
  - union-returning query fields and container types
- Hotspot typing pressure in `src/hotspot.ts`
  - one large `gql` query over union-heavy fields
  - repeated `ResultOf` + `VariablesOf` + `Extract` + `NonNullable`
  - extra discriminated relation matrix types to increase checker pressure

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

Source: `benchmarks/2026-02-20T18-38-06.692Z-summary.md`

| Command | Avg Check time | Avg Total time |
| --- | --- | --- |
| `bench:once:tsc` | 4.764s | 5.064s |
| `bench:once:tsgo` | 2.291s | 2.337s |
| `bench:once:tsgo:single-threaded` | 2.305s | 2.390s |
| `bench:once:tsgo:checkers` | 2.330s | 2.377s |

Expected in target symptom: default `tsgo` slower than `tsgo --singleThreaded`.

Observed in this current run: default `tsgo` is slightly faster than `--singleThreaded` (small but consistent delta across this run set).

## Raw logs

- Generated under `benchmarks/`
- Latest set:
  - `benchmarks/2026-02-20T18-38-06.692Z-summary.md`
  - per-run logs alongside that summary (one file per command/run)

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
