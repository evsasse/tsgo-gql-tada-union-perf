import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";

const benchmarkDir = resolve(process.cwd(), "benchmarks");
mkdirSync(benchmarkDir, { recursive: true });

const scenarios = [
  {
    name: "monolith-high",
    env: {
      SCENARIO: "monolith",
      UNION_MEMBER_COUNT: "220",
      MONOLITH_SELECTION_COUNT: "140",
      MONOLITH_FRAGMENT_COUNT: "80",
      MONOLITH_EXTRACT_COUNT: "320",
      RELATION_DEPTH: "26"
    }
  },
  {
    name: "fragments-high",
    env: {
      SCENARIO: "fragments",
      UNION_MEMBER_COUNT: "220",
      FRAGMENT_COUNT: "120",
      FRAGMENT_FANOUT: "4",
      QUERY_COUNT: "20",
      QUERY_SELECTION_COUNT: "110",
      DISCRIM_COMBO_TARGET: "220"
    }
  },
  {
    name: "ladders-high",
    env: {
      SCENARIO: "ladders",
      UNION_MEMBER_COUNT: "220",
      LADDER_FIELD_COUNT: "16",
      LADDER_CHAIN_DEPTH: "14",
      LADDER_EXTRACT_COUNT: "360",
      DISCRIM_COMBO_TARGET: "220"
    }
  },
  {
    name: "all-stacked",
    env: {
      SCENARIO: "all",
      UNION_MEMBER_COUNT: "240",
      MONOLITH_SELECTION_COUNT: "160",
      MONOLITH_FRAGMENT_COUNT: "96",
      MONOLITH_EXTRACT_COUNT: "420",
      RELATION_DEPTH: "28",
      FRAGMENT_COUNT: "140",
      FRAGMENT_FANOUT: "4",
      QUERY_COUNT: "24",
      QUERY_SELECTION_COUNT: "120",
      LADDER_FIELD_COUNT: "18",
      LADDER_CHAIN_DEPTH: "16",
      LADDER_EXTRACT_COUNT: "420",
      DISCRIM_COMBO_TARGET: "240"
    }
  },
  {
    name: "all-extreme",
    env: {
      SCENARIO: "all",
      UNION_MEMBER_COUNT: "280",
      MONOLITH_SELECTION_COUNT: "190",
      MONOLITH_FRAGMENT_COUNT: "120",
      MONOLITH_EXTRACT_COUNT: "520",
      RELATION_DEPTH: "29",
      FRAGMENT_COUNT: "180",
      FRAGMENT_FANOUT: "5",
      QUERY_COUNT: "28",
      QUERY_SELECTION_COUNT: "140",
      LADDER_FIELD_COUNT: "22",
      LADDER_CHAIN_DEPTH: "18",
      LADDER_EXTRACT_COUNT: "520",
      DISCRIM_COMBO_TARGET: "260"
    }
  }
];

function run(command, env) {
  const parts = command.split(" ");
  const result = spawnSync(parts[0], parts.slice(1), {
    cwd: process.cwd(),
    env: { ...process.env, ...env },
    encoding: "utf8"
  });
  const output = `${result.stdout ?? ""}${result.stderr ?? ""}`;
  if (result.status !== 0) {
    throw new Error(`Command failed: ${command}\n${output}`);
  }
  return output;
}

function extractMetric(output, metricName) {
  const pattern = new RegExp(`^${metricName}:\\s+(.+)$`, "gm");
  let match;
  let last = "";
  while ((match = pattern.exec(output)) !== null) {
    last = match[1].trim();
  }
  return last;
}

function parseSeconds(metric) {
  if (!metric) return Number.NaN;
  if (metric.endsWith("s")) return Number.parseFloat(metric.slice(0, -1));
  return Number.parseFloat(metric);
}

const timestamp = new Date().toISOString().replaceAll(":", "-");
const rows = [];

for (const scenario of scenarios) {
  console.log(`Running scenario matrix entry: ${scenario.name}`);
  try {
    run("npm run schema:generate", scenario.env);
    const tsgo = run("npm run bench:once:tsgo", scenario.env);
    const single = run("npm run bench:once:tsgo:single-threaded", scenario.env);
    const tsgoTotal = extractMetric(tsgo, "Total time");
    const singleTotal = extractMetric(single, "Total time");
    const ratio = parseSeconds(tsgoTotal) / parseSeconds(singleTotal);
    rows.push({
      name: scenario.name,
      tsgoTotal,
      singleTotal,
      ratio,
      status: "ok",
      env: scenario.env
    });
  } catch (error) {
    rows.push({
      name: scenario.name,
      tsgoTotal: "n/a",
      singleTotal: "n/a",
      ratio: Number.NaN,
      status: "failed",
      error: String(error).split("\n")[0],
      env: scenario.env
    });
  }
}

rows.sort((a, b) => {
  if (a.status !== b.status) return a.status === "ok" ? -1 : 1;
  return b.ratio - a.ratio;
});

const tableHeader =
  "| scenario | status | tsgo total | single-threaded total | ratio |\n| --- | --- | --- | --- | --- |";
const tableRows = rows.map(
  (row) =>
    `| ${row.name} | ${row.status} | ${row.tsgoTotal} | ${row.singleTotal} | ${Number.isFinite(row.ratio) ? row.ratio.toFixed(3) : "n/a"} |`
);

const details = rows
  .map(
    (row) =>
      `### ${row.name}\n\n${row.status === "failed" ? `Error: ${row.error}\n\n` : ""}\`\`\`json\n${JSON.stringify(row.env, null, 2)}\n\`\`\`\n`
  )
  .join("\n");

const summary = `# Scenario Matrix (${timestamp})

${tableHeader}
${tableRows.join("\n")}

## Configurations

${details}
`;

const outputPath = resolve(benchmarkDir, `${timestamp}-scenario-matrix.md`);
writeFileSync(outputPath, summary, "utf8");
console.log(`Wrote scenario matrix summary: ${outputPath}`);
