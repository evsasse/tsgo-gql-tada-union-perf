---
name: gql-tada tsgo repro
overview: Create a minimal standalone repository that reproduces the `gql.tada` union-related tsgo slowdown, with deterministic schema generation and benchmark scripts comparing `tsc`, `tsgo`, and `tsgo --singleThreaded` under cache-cleared conditions.
todos: []
isProject: false
---

# Minimal `gql.tada` + `tsgo` Repro Plan

## Goal

Produce a small public repo that demonstrates:

- `tsgo` (default multithreaded) significantly slower than expected on a `gql.tada`-typed union-heavy query shape.
- `tsgo --singleThreaded` materially faster than default on the same code.
- `tsc` benchmark included for baseline comparison.

## 1) Create the repro repository skeleton

- Work inside your separate repository root (`<repro-repo-root>`). Do not use `/tmp`.
- Add files:
  - `[/path/to/your-repro-repo/package.json](/path/to/your-repro-repo/package.json)`
  - `[/path/to/your-repro-repo/tsconfig.json](/path/to/your-repro-repo/tsconfig.json)`
  - `[/path/to/your-repro-repo/src/gqlClient.ts](/path/to/your-repro-repo/src/gqlClient.ts)`
  - `[/path/to/your-repro-repo/src/hotspot.ts](/path/to/your-repro-repo/src/hotspot.ts)`
  - `[/path/to/your-repro-repo/schema.graphql](/path/to/your-repro-repo/schema.graphql)`
  - `[/path/to/your-repro-repo/scripts/genSchema.ts](/path/to/your-repro-repo/scripts/genSchema.ts)`
  - `[/path/to/your-repro-repo/README.md](/path/to/your-repro-repo/README.md)`
- Install dependencies:
  - runtime/dev: `typescript`, `@typescript/native-preview`, `gql.tada`, `graphql`, `tsx`.

## 2) Configure gql.tada plugin with schema + generated introspection types

- In `[/path/to/your-repro-repo/tsconfig.json](/path/to/your-repro-repo/tsconfig.json)`, configure TypeScript plugin:
  - `name: "gql.tada/ts-plugin"`
  - `schema: "./schema.graphql"`
  - `tadaOutputLocation: "./src/__generated_schema.d.ts"`
- Keep `incremental: true` to mirror real-world cache behavior; benchmarks will always clear buildinfo before each run.

## 3) Generate a valid `schema.graphql` (deterministic)

- Implement `[/path/to/your-repro-repo/scripts/genSchema.ts](/path/to/your-repro-repo/scripts/genSchema.ts)` to produce a union-heavy SDL schema file.
- Script requirements:
  - Generate many object types with overlapping fields (e.g., 20-40 members).
  - Define one or more large unions and nested unions.
  - Add query root fields returning lists/connections of those unions.
  - Write SDL to `[/path/to/your-repro-repo/schema.graphql](/path/to/your-repro-repo/schema.graphql)`.
- Add script command: `pnpm schema:generate`.

## 4) Create the minimal hotspot source using gql.tada

- In `[/path/to/your-repro-repo/src/gqlClient.ts](/path/to/your-repro-repo/src/gqlClient.ts)`:
  - `initGraphQLTada` with introspection from generated `src/__generated_schema.d.ts`.
  - Re-export `gql`, `ResultOf`, `VariablesOf`.
- In `[/path/to/your-repro-repo/src/hotspot.ts](/path/to/your-repro-repo/src/hotspot.ts)`:
  - Define one large `gql` query/fragment selecting many union branches.
  - Add repeated derived aliases (`ResultOf`, `NonNullable`, `Extract<..., { __typename: ... }>`).
  - Add a small amount of repeated narrowing helpers to mimic real union-heavy checker work.
- Keep runtime logic minimal; focus on type-level pressure.

## 5) Add benchmark and diagnostics commands

- In `[/path/to/your-repro-repo/package.json](/path/to/your-repro-repo/package.json)`, define:
  - `lint:clear`: remove both `tsconfig.tsbuildinfo` and `tsconfig.tsgo.tsbuildinfo` with `rm -f`.
  - `lint:tsc`: `tsc --noEmit --skipLibCheck --incremental --diagnostics`.
  - `lint:tsgo`: `tsgo --noEmit --skipLibCheck --incremental --diagnostics`.
  - `lint:tsgo:single-threaded`: `tsgo --noEmit --skipLibCheck --incremental --singleThreaded --diagnostics`.
  - `lint:tsgo:checkers`: `tsgo --noEmit --skipLibCheck --incremental --checkers 1 --diagnostics` (optional extra comparator).
  - `bench:once:*` scripts that always run `lint:clear` before each tool.
- Add a simple loop script (`bench:loop`) to run each benchmark 5-10 times and save outputs to `[/path/to/your-repro-repo/benchmarks/](/path/to/your-repro-repo/benchmarks/)`.

## 6) Run benchmarks and collect evidence

- Benchmark matrix (same machine/session):
  - `pnpm bench:once:tsc`
  - `pnpm bench:once:tsgo`
  - `pnpm bench:once:tsgo:single-threaded`
  - optional `pnpm bench:once:tsgo:checkers`
- Repeat each command 5-10 times with clean cache every run.
- Capture and summarize from diagnostics:
  - `Types`, `Instantiations`, `Memory`, `Check time`, `Total time`.
- Record CPU/OS/Node versions in README.

## 7) Minimize while preserving the slowdown gap

- Iteratively reduce schema/query complexity while preserving the key relationship:
  - `tsgo(default)` remains much slower than `tsgo --singleThreaded` on same code.
- Remove unrelated files/types until only the smallest reproducing schema + query remains.
- Lock dependency versions in README and `package.json` for deterministic reproduction.

## 8) Prepare tsgo issue-ready bundle

- README must include:
  - exact setup commands (`pnpm i`, `pnpm schema:generate`, benchmark commands)
  - expected vs observed results table
  - raw benchmark logs path
  - machine info + tool versions
- Link to upstream issue context for maintainers:
  - [#2454](https://github.com/microsoft/typescript-go/issues/2454)
  - [#2551](https://github.com/microsoft/typescript-go/issues/2551)

## Notes for the implementing agent

- Do not depend on a running backend for repro; keep schema generation local and deterministic.
- Prefer one synthetic schema/query pair that is clearly union-heavy over many files.
- Ensure all benchmark commands are cache-cleared and reproducible from a clean clone.
