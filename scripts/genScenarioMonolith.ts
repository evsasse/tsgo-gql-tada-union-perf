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

export function generateMonolithScenario(): string {
  const knobs = readKnobs();
  const totalMembers = knobs.unionMemberCount;
  const unionACount = clamp(Math.floor(totalMembers * 0.75), 1, totalMembers);
  const unionBStart = clamp(Math.floor(totalMembers * 0.25), 0, totalMembers - 1);
  const unionBCount = totalMembers - unionBStart;
  const selectionCount = clamp(knobs.monolithSelectionCount, 3, 16);
  const extractCount = clamp(knobs.monolithExtractCount, 24, 240);
  const relationDepth = clamp(knobs.relationDepth, 2, 12);

  const aMembers = range(0, selectionCount).map((index) => index % unionACount);
  const bMembers = range(0, selectionCount).map((index) => unionBStart + (index % unionBCount));

  const feedASelections = aMembers
    .map((memberIndex) => {
      const suffix = memberIndex.toString().padStart(2, "0");
      return `      ... on ${memberName(memberIndex)} { __typename typenameHint overlapA overlapB memberKey_${suffix} memberMetric_${suffix} }`;
    })
    .join("\n");
  const feedBSelections = bMembers
    .map((memberIndex) => {
      const suffix = memberIndex.toString().padStart(2, "0");
      return `      ... on ${memberName(memberIndex)} { __typename typenameHint overlapA overlapB memberKey_${suffix} memberMetric_${suffix} }`;
    })
    .join("\n");

  const extractAliases = range(0, extractCount)
    .map((index) => {
      const typeName = memberName(index % totalMembers);
      return `type MonolithExtract${index.toString().padStart(4, "0")} = Extract<MonolithUnionItem, { __typename: "${typeName}" }>;`;
    })
    .join("\n");

  const relationLayers = range(1, relationDepth).map(
    (index) =>
      `type MonolithRelation${index} = { [K in keyof MonolithRelation${index - 1}]: MonolithRelation${index - 1}[K] };`
  );
  const relationFinalName = `MonolithRelation${relationDepth - 1}`;

  const scenarioSource = `import { gql } from "../gqlClient";
import type { ResultOf, VariablesOf } from "../gqlClient";

export const MONOLITH_SCENARIO_QUERY = gql(\`
  query MonolithScenario($limit: Int!) {
    feedA(limit: $limit) {
      __typename
${feedASelections}
    }
    feedB(limit: $limit) {
      __typename
${feedBSelections}
    }
  }
\`);

type MonolithResult = ResultOf<typeof MONOLITH_SCENARIO_QUERY>;
type MonolithVariables = VariablesOf<typeof MONOLITH_SCENARIO_QUERY>;

type MonolithFeedAItem = NonNullable<MonolithResult["feedA"]>[number];
type MonolithFeedBItem = NonNullable<MonolithResult["feedB"]>[number];
type MonolithUnionItem = MonolithFeedAItem | MonolithFeedBItem;
type MonolithTypename = MonolithUnionItem["__typename"];
type MonolithByTypename<TName extends MonolithTypename> = Extract<MonolithUnionItem, { __typename: TName }>;

${extractAliases}

type MonolithRelation0 = {
  [Left in MonolithTypename]: {
    [Right in MonolithTypename]:
      | (MonolithByTypename<Left> extends MonolithByTypename<Right> ? Left : never)
      | (MonolithByTypename<Right> extends MonolithByTypename<Left> ? Right : never)
      | Extract<MonolithByTypename<Left>, { __typename: Right }>
      | Extract<MonolithByTypename<Right>, { __typename: Left }>;
  };
};
${relationLayers.join("\n")}

export type MonolithScenarioToken = ${relationFinalName}["${memberName(aMembers[0])}"]["${memberName(bMembers[0])}"];

export function createMonolithScenarioVariables(limit: number): MonolithVariables {
  return { limit };
}
`;

  const outPath = resolve(process.cwd(), "src/scenarios/monolith.ts");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, scenarioSource, "utf8");
  return outPath;
}

const thisPath = fileURLToPath(import.meta.url);
if (process.argv[1] && resolve(process.argv[1]) === thisPath) {
  const path = generateMonolithScenario();
  console.log(`Wrote monolith scenario: ${path}`);
}
