import { copyFileSync, mkdirSync, readdirSync, renameSync, statSync, writeFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const rootDir = process.cwd();
const benchmarkDir = resolve(rootDir, "benchmarks");
mkdirSync(benchmarkDir, { recursive: true });

const timestamp = new Date().toISOString().replaceAll(":", "-");
const artifactDir = resolve(benchmarkDir, `${timestamp}-pprof`);
mkdirSync(artifactDir, { recursive: true });

const profileCommands = [
  {
    script: "bench:once:tsgo:pprof",
    label: "tsgo_default"
  },
  {
    script: "bench:once:tsgo:single-threaded:pprof",
    label: "tsgo_single_threaded"
  }
];

function runCommand(command, args) {
  return spawnSync(command, args, {
    cwd: rootDir,
    env: process.env,
    encoding: "utf8"
  });
}

function getCommandVersion(command, args) {
  const result = runCommand(command, args);
  const stdout = (result.stdout ?? "").trim();
  const stderr = (result.stderr ?? "").trim();
  if (result.status !== 0) {
    return `unavailable (${command} ${args.join(" ")})`;
  }

  return stdout || stderr || "unknown";
}

function readPprofSnapshot() {
  const snapshot = new Map();
  const entries = readdirSync(rootDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isFile()) continue;
    const loweredName = entry.name.toLowerCase();
    if (!loweredName.includes("pprof") && !loweredName.includes("profile")) continue;

    const fullPath = join(rootDir, entry.name);
    const stat = statSync(fullPath);
    snapshot.set(entry.name, {
      mtimeMs: stat.mtimeMs,
      size: stat.size
    });
  }

  return snapshot;
}

function listChangedProfiles(before, after) {
  const changed = [];

  for (const [name, afterMeta] of after.entries()) {
    const beforeMeta = before.get(name);
    if (!beforeMeta || beforeMeta.mtimeMs !== afterMeta.mtimeMs || beforeMeta.size !== afterMeta.size) {
      changed.push(name);
    }
  }

  changed.sort((a, b) => a.localeCompare(b));
  return changed;
}

function extractProfilePaths(output) {
  const profilePaths = [];
  const pattern = /^(?:Memory|CPU)\s+profile:\s+(.+)$/gim;
  let match;
  while ((match = pattern.exec(output)) !== null) {
    profilePaths.push(match[1].trim());
  }

  return profilePaths;
}

const metadata = {
  timestamp,
  cwd: rootDir,
  node: process.version,
  npmVersion: getCommandVersion("npm", ["--version"]),
  tsgoVersion: getCommandVersion("npx", ["tsgo", "--version"])
};

const runResults = [];

for (const commandSpec of profileCommands) {
  const before = readPprofSnapshot();
  const run = runCommand("npm", ["run", commandSpec.script]);
  const after = readPprofSnapshot();

  const output = `${run.stdout ?? ""}${run.stderr ? `\n[stderr]\n${run.stderr}` : ""}`.trim();
  const logFileName = `${commandSpec.label}.log`;
  const logPath = resolve(artifactDir, logFileName);
  writeFileSync(logPath, output.endsWith("\n") ? output : `${output}\n`, "utf8");

  const changedProfiles = listChangedProfiles(before, after);
  const reportedProfilePaths = extractProfilePaths(output);
  const candidateSources = new Map();

  for (const pathFromOutput of reportedProfilePaths) {
    const sourcePath = pathFromOutput.startsWith("/") ? pathFromOutput : resolve(rootDir, pathFromOutput);
    candidateSources.set(sourcePath, basename(sourcePath));
  }

  for (const profileName of changedProfiles) {
    const sourcePath = resolve(rootDir, profileName);
    candidateSources.set(sourcePath, profileName);
  }

  const copiedProfiles = [];

  for (const [sourcePath, sourceName] of candidateSources.entries()) {
    try {
      statSync(sourcePath);
    } catch {
      continue;
    }

    const destinationName = `${commandSpec.label}__${sourceName}`;
    const destinationPath = resolve(artifactDir, destinationName);
    if (sourcePath.startsWith(`${rootDir}/`)) {
      renameSync(sourcePath, destinationPath);
    } else {
      copyFileSync(sourcePath, destinationPath);
    }
    copiedProfiles.push(destinationName);
  }

  runResults.push({
    script: commandSpec.script,
    label: commandSpec.label,
    status: run.status === 0 ? "ok" : "failed",
    logFileName,
    copiedProfiles,
    exitCode: run.status
  });
}

const totalCopiedProfiles = runResults.reduce((total, result) => total + result.copiedProfiles.length, 0);

const resultSections = runResults
  .map((result) => {
    const profilesList =
      result.copiedProfiles.length === 0
        ? "- none detected"
        : result.copiedProfiles.map((name) => `- ${name}`).join("\n");

    return `## ${result.script}

- status: ${result.status}
- exit code: ${result.exitCode}
- log file: ${result.logFileName}
- captured profiles:
${profilesList}
`;
  })
  .join("\n");

const manifest = `# tsgo pprof capture (${timestamp})

- working directory: ${metadata.cwd}
- node: ${metadata.node}
- npm: ${metadata.npmVersion}
- tsgo: ${metadata.tsgoVersion}
- artifact directory: ${artifactDir}
- total captured profiles: ${totalCopiedProfiles}

${resultSections}`;

const manifestPath = resolve(artifactDir, "manifest.md");
writeFileSync(manifestPath, manifest, "utf8");

console.log(`Wrote pprof artifact directory: ${artifactDir}`);
console.log(`Wrote manifest: ${manifestPath}`);

const failedRun = runResults.find((result) => result.status !== "ok");
if (failedRun) {
  throw new Error(`Profile capture failed for ${failedRun.script}. See ${manifestPath} for details.`);
}

if (totalCopiedProfiles === 0) {
  throw new Error(`No profile files were captured. Confirm tsgo wrote pprof files into ${rootDir}.`);
}
