import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const ITERATIONS = Number.parseInt(process.env.BENCH_ITERATIONS ?? "5", 10);
const commands = [
  "bench:once:tsc",
  "bench:once:tsgo",
  "bench:once:tsgo:single-threaded",
  "bench:once:tsgo:checkers"
];

const benchmarkDir = resolve(process.cwd(), "benchmarks");
mkdirSync(benchmarkDir, { recursive: true });

function runScript(name) {
  const run = spawnSync("npm", ["run", name], {
    cwd: process.cwd(),
    encoding: "utf8",
    env: process.env
  });

  const stdout = run.stdout ?? "";
  const stderr = run.stderr ?? "";
  const combined = `${stdout}${stderr ? `\n[stderr]\n${stderr}` : ""}`.trim();

  if (run.status !== 0) {
    throw new Error(`Command failed (${name})\n${combined}`);
  }

  return combined;
}

function extractMetric(output, metricName) {
  const pattern = new RegExp(`^${metricName}:\\s+(.+)$`, "gm");
  let match;
  let last = "";
  while ((match = pattern.exec(output)) !== null) {
    last = match[1].trim();
  }
  return last || "n/a";
}

function extractSummary(output) {
  return {
    types: extractMetric(output, "Types"),
    instantiations: extractMetric(output, "Instantiations"),
    memory: extractMetric(output, "Memory used"),
    checkTime: extractMetric(output, "Check time"),
    totalTime: extractMetric(output, "Total time")
  };
}

const timestamp = new Date().toISOString().replaceAll(":", "-");
const summaryRows = [];

for (let iteration = 1; iteration <= ITERATIONS; iteration += 1) {
  for (const command of commands) {
    const output = runScript(command);
    const filename = `${timestamp}-${command.replaceAll(":", "_")}-run${iteration}.log`;
    const filePath = join(benchmarkDir, filename);

    writeFileSync(filePath, output.endsWith("\n") ? output : `${output}\n`, "utf8");

    summaryRows.push({
      run: iteration,
      command,
      file: filename,
      ...extractSummary(output)
    });

    console.log(`Saved ${command} run ${iteration}: ${filePath}`);
  }
}

const summaryTableHeader =
  "| run | command | Types | Instantiations | Memory used | Check time | Total time | log file |\n" +
  "| --- | --- | --- | --- | --- | --- | --- | --- |";
const summaryTableRows = summaryRows.map(
  (row) =>
    `| ${row.run} | ${row.command} | ${row.types} | ${row.instantiations} | ${row.memory} | ${row.checkTime} | ${row.totalTime} | ${row.file} |`
);
const summaryContents = `# Benchmark Summary (${timestamp})

${summaryTableHeader}
${summaryTableRows.join("\n")}
`;
const summaryPath = join(benchmarkDir, `${timestamp}-summary.md`);
writeFileSync(summaryPath, summaryContents, "utf8");

console.log(`Wrote benchmark summary: ${summaryPath}`);
