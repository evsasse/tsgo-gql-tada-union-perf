import { mkdirSync, writeFileSync } from "node:fs";
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

export function generateLaddersScenario(): string {
  const knobs = readKnobs();
  const totalMembers = knobs.unionMemberCount;
  const fieldCount = clamp(knobs.ladderFieldCount, 2, 10);
  const chainDepth = clamp(knobs.ladderChainDepth, 2, 10);
  const extractCount = clamp(knobs.ladderExtractCount, 16, 220);

  const unionACount = clamp(Math.floor(totalMembers * 0.75), 1, totalMembers);
  const unionBStart = clamp(Math.floor(totalMembers * 0.25), 0, totalMembers - 1);
  const unionBCount = totalMembers - unionBStart;
  const selectionCount = clamp(Math.floor(knobs.discriminatedComboTarget / 24), 2, 12);

  const queryAliases = range(0, fieldCount)
    .map((aliasIndex) => {
      const aSelections = range(0, selectionCount)
        .map((offset) => {
          const memberIndex = (aliasIndex + offset) % unionACount;
          const suffix = memberIndex.toString().padStart(2, "0");
          return `      ... on ${memberName(memberIndex)} { __typename memberKey_${suffix} memberMetric_${suffix} }`;
        })
        .join("\n");
      const bSelections = range(0, selectionCount)
        .map((offset) => {
          const memberIndex = unionBStart + ((aliasIndex + offset) % unionBCount);
          const suffix = memberIndex.toString().padStart(2, "0");
          return `      ... on ${memberName(memberIndex)} { __typename memberKey_${suffix} memberMetric_${suffix} }`;
        })
        .join("\n");

      return `    a${aliasIndex.toString().padStart(2, "0")}: feedA(limit: $limit) {
      __typename
${aSelections}
    }
    b${aliasIndex.toString().padStart(2, "0")}: feedB(limit: $limit) {
      __typename
${bSelections}
    }`;
    })
    .join("\n");

  const perAliasTypes = range(0, fieldCount)
    .map((aliasIndex) => {
      const suffix = aliasIndex.toString().padStart(2, "0");
      const chain = range(1, chainDepth).map((depth) => {
        const prev = depth === 1 ? `LaddersA${suffix}` : `LaddersA${suffix}Chain${(depth - 1).toString().padStart(2, "0")}`;
        const curr = `LaddersA${suffix}Chain${depth.toString().padStart(2, "0")}`;
        return `type ${curr} = NonNullable<${prev}>;`;
      });

      return `type LaddersA${suffix} = NonNullable<LaddersScenarioResult["a${suffix}"]>[number];
type LaddersB${suffix} = NonNullable<LaddersScenarioResult["b${suffix}"]>[number];
${chain.join("\n")}
type LaddersA${suffix}Key = LaddersA${suffix}["__typename"];
type LaddersB${suffix}Key = LaddersB${suffix}["__typename"];`;
    })
    .join("\n\n");

  const unionParts = range(0, fieldCount)
    .map((aliasIndex) => {
      const suffix = aliasIndex.toString().padStart(2, "0");
      return `LaddersA${suffix} | LaddersB${suffix}`;
    })
    .join(" |\n  ");

  const extractAliases = range(0, extractCount)
    .map((index) => {
      const memberIndex = index % totalMembers;
      return `type LaddersExtract${index.toString().padStart(4, "0")} = Extract<LaddersUnion, { __typename: "${memberName(memberIndex)}" }>;`;
    })
    .join("\n");

  const scenarioSource = `import { gql } from "../gqlClient";
import type { ResultOf, VariablesOf } from "../gqlClient";

export const LADDERS_SCENARIO_QUERY = gql(\`
  query LaddersScenario($limit: Int!) {
${queryAliases}
  }
\`);

type LaddersScenarioResult = ResultOf<typeof LADDERS_SCENARIO_QUERY>;
type LaddersScenarioVariables = VariablesOf<typeof LADDERS_SCENARIO_QUERY>;

${perAliasTypes}

type LaddersUnion =
  ${unionParts};
type LaddersTypename = LaddersUnion["__typename"];
${extractAliases}

type LaddersMatrix0 = {
  [Left in LaddersTypename]: {
    [Right in LaddersTypename]:
      | (Extract<LaddersUnion, { __typename: Left }> extends Extract<LaddersUnion, { __typename: Right }> ? Left : never)
      | (Extract<LaddersUnion, { __typename: Right }> extends Extract<LaddersUnion, { __typename: Left }> ? Right : never)
      | Extract<LaddersUnion, { __typename: Left | Right }>;
  };
};
type LaddersMatrix1 = { [K in keyof LaddersMatrix0]: LaddersMatrix0[K] };
type LaddersMatrix2 = { [K in keyof LaddersMatrix1]: LaddersMatrix1[K] };

export type LaddersScenarioToken = LaddersMatrix2["Member00"]["Member50"];

export function createLaddersScenarioVariables(limit: number): LaddersScenarioVariables {
  return { limit };
}
`;

  const outPath = resolve(process.cwd(), "src/scenarios/ladders.ts");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, scenarioSource, "utf8");
  return outPath;
}

const thisPath = fileURLToPath(import.meta.url);
if (process.argv[1] && resolve(process.argv[1]) === thisPath) {
  const path = generateLaddersScenario();
  console.log(`Wrote ladders scenario: ${path}`);
}
