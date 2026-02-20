import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { clamp, memberName, readKnobs } from "./scenarioKnobs";

function range(start: number, count: number): number[] {
  const values: number[] = [];
  for (let i = 0; i < count; i += 1) {
    values.push(start + i);
  }
  return values;
}

function padded(index: number): string {
  return index.toString().padStart(3, "0");
}

function createFragmentFile(index: number, totalMembers: number, fanout: number): string {
  const id = padded(index);
  const memberIndex = (index - 1) % totalMembers;
  const member = memberName(memberIndex);
  const suffix = memberIndex.toString().padStart(2, "0");
  const deps = range(Math.max(1, index - fanout), Math.max(0, Math.min(fanout, index - 1)));
  const depImports = deps
    .map((dep) => `import type { FragmentToken${padded(dep)} } from "./fragment${padded(dep)}";`)
    .join("\n");
  const depUnion = deps.length > 0 ? ` | ${deps.map((dep) => `FragmentToken${padded(dep)}`).join(" | ")}` : "";

  return `import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
${depImports}

export const FRAGMENT_${id} = gql(\`
  fragment Fragment${id} on ${member} {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_${suffix}
    memberCount_${suffix}
    memberMetric_${suffix}
  }
\`);

type FragmentResult${id} = ResultOf<typeof FRAGMENT_${id}>;
type FragmentSelf${id} = NonNullable<FragmentResult${id}>;

export type FragmentToken${id} =
  | FragmentSelf${id}["__typename"]
  | FragmentSelf${id}["typenameHint"]${depUnion};
`;
}

export function generateFragmentsScenario(): string {
  const knobs = readKnobs();
  const totalMembers = knobs.unionMemberCount;
  const fragmentCount = clamp(knobs.fragmentCount, 8, 5000);
  const fanout = clamp(knobs.fragmentFanout, 1, 6);
  const queryCount = clamp(knobs.queryCount, 1, 12);
  const selectionCount = clamp(
    knobs.querySelectionCount,
    3,
    Math.min(Math.floor(totalMembers * 0.75), 10)
  );
  const extractCount = clamp(Math.floor(knobs.discriminatedComboTarget * 0.1), 4, 40);

  const outDir = resolve(process.cwd(), "src/scenarios/fragments");
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });

  for (let i = 1; i <= fragmentCount; i += 1) {
    const filePath = resolve(outDir, `fragment${padded(i)}.ts`);
    writeFileSync(filePath, createFragmentFile(i, totalMembers, fanout), "utf8");
  }

  const unionACount = clamp(Math.floor(totalMembers * 0.75), 1, totalMembers);
  const unionBStart = clamp(Math.floor(totalMembers * 0.25), 0, totalMembers - 1);
  const unionBCount = totalMembers - unionBStart;

  const queries = range(0, queryCount).map((queryIndex) => {
    const queryId = padded(queryIndex + 1);
    const feedASelections = range(0, selectionCount)
      .map((offset) => {
        const memberIndex = (queryIndex + offset) % unionACount;
        const fragmentId = padded((memberIndex % fragmentCount) + 1);
        return `      ... on ${memberName(memberIndex)} { ...Fragment${fragmentId} }`;
      })
      .join("\n");
    const feedBSelections = range(0, selectionCount)
      .map((offset) => {
        const memberIndex = unionBStart + ((queryIndex + offset) % unionBCount);
        const fragmentId = padded((memberIndex % fragmentCount) + 1);
        return `      ... on ${memberName(memberIndex)} { ...Fragment${fragmentId} }`;
      })
      .join("\n");
    const fragmentDefs = range(0, Math.min(fragmentCount, selectionCount))
      .map((offset) => {
        const fragmentId = padded((queryIndex + offset) % fragmentCount + 1);
        const memberIndex = (queryIndex + offset) % totalMembers;
        const suffix = memberIndex.toString().padStart(2, "0");
        return `  fragment Fragment${fragmentId} on ${memberName(memberIndex)} {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_${suffix}
    memberCount_${suffix}
    memberMetric_${suffix}
  }`;
      })
      .join("\n\n");

    const extractAliases = range(0, extractCount)
      .map((offset) => {
        const memberIndex = (queryIndex + offset) % totalMembers;
        return `type FragmentsQuery${queryId}Extract${offset.toString().padStart(3, "0")} = Extract<FragmentsQuery${queryId}Union, { __typename: "${memberName(memberIndex)}" }>;`;
      })
      .join("\n");

    return `export const FRAGMENTS_QUERY_${queryId} = gql(\`
  query FragmentsScenario${queryId}($limit: Int!) {
    feedA(limit: $limit) {
      __typename
${feedASelections}
    }
    feedB(limit: $limit) {
      __typename
${feedBSelections}
    }
  }

${fragmentDefs}
\`);

type FragmentsQuery${queryId}Result = ResultOf<typeof FRAGMENTS_QUERY_${queryId}>;
type FragmentsQuery${queryId}A = NonNullable<FragmentsQuery${queryId}Result["feedA"]>[number];
type FragmentsQuery${queryId}B = NonNullable<FragmentsQuery${queryId}Result["feedB"]>[number];
type FragmentsQuery${queryId}Union = FragmentsQuery${queryId}A | FragmentsQuery${queryId}B;
${extractAliases}
`;
  });

  const tokenUnion = range(1, fragmentCount).map((index) => `FragmentToken${padded(index)}`).join(" | ");
  const rootContent = `import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
${range(1, fragmentCount)
  .map((index) => `import type { FragmentToken${padded(index)} } from "./fragment${padded(index)}";`)
  .join("\n")}

type FragmentTokenUnion = ${tokenUnion};

${queries.join("\n")}

export type FragmentsScenarioToken = FragmentTokenUnion;
`;
  const rootsPath = resolve(outDir, "rootQueries.ts");
  writeFileSync(rootsPath, rootContent, "utf8");

  const indexLines = range(1, fragmentCount)
    .map((index) => `export * from "./fragment${padded(index)}";`)
    .concat(`export * from "./rootQueries";`);
  const indexPath = resolve(outDir, "index.ts");
  writeFileSync(indexPath, `${indexLines.join("\n")}\n`, "utf8");

  return outDir;
}

const thisPath = fileURLToPath(import.meta.url);
if (process.argv[1] && resolve(process.argv[1]) === thisPath) {
  const path = generateFragmentsScenario();
  console.log(`Wrote fragments scenario: ${path}`);
}
