import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { generateFragmentsScenario } from "./genScenarioFragments";
import { generateLaddersScenario } from "./genScenarioLadders";
import { generateMonolithScenario } from "./genScenarioMonolith";
import { readKnobs, readScenarioName } from "./scenarioKnobs";

const scenariosRoot = resolve(process.cwd(), "src/scenarios");
const legacyWorkloadsRoot = resolve(process.cwd(), "src/generated-workloads");

rmSync(scenariosRoot, { recursive: true, force: true });
rmSync(legacyWorkloadsRoot, { recursive: true, force: true });
mkdirSync(scenariosRoot, { recursive: true });

const scenario = readScenarioName();
const knobs = readKnobs();

const exportLines: string[] = [];

if (scenario === "monolith" || scenario === "all") {
  generateMonolithScenario();
  exportLines.push(`export * from "./monolith";`);
}
if (scenario === "fragments" || scenario === "all") {
  generateFragmentsScenario();
  exportLines.push(`export * from "./fragments";`);
}
if (scenario === "ladders" || scenario === "all") {
  generateLaddersScenario();
  exportLines.push(`export * from "./ladders";`);
}

const indexPath = resolve(scenariosRoot, "index.ts");
writeFileSync(indexPath, `${exportLines.join("\n")}\n`, "utf8");

console.log(`Generated scenario set: ${scenario}`);
console.log(`Scenario knobs: ${JSON.stringify(knobs, null, 2)}`);
console.log(`Wrote scenario index: ${indexPath}`);
