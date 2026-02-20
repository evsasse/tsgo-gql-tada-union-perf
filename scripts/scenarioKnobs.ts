export type ScenarioName = "monolith" | "fragments" | "ladders" | "all";

function readInt(name: string, fallback: number): number {
  const raw = process.env[name];
  if (!raw) return fallback;
  const parsed = Number.parseInt(raw, 10);
  if (!Number.isFinite(parsed) || parsed < 1) {
    throw new Error(`${name} must be an integer >= 1`);
  }
  return parsed;
}

export function readScenarioName(): ScenarioName {
  const raw = (process.env.SCENARIO ?? "all").toLowerCase();
  if (raw === "monolith" || raw === "fragments" || raw === "ladders" || raw === "all") {
    return raw;
  }
  throw new Error(`SCENARIO must be one of: monolith, fragments, ladders, all`);
}

// Defaults tuned from tmp trace evidence:
// - recursiveTypeRelatedTo depth ceiling around 29
// - discriminated combination pressure up to ~198
// - very high union/type-argument cardinality
export function readKnobs() {
  return {
    unionMemberCount: readInt("UNION_MEMBER_COUNT", 200),
    relationDepth: readInt("RELATION_DEPTH", 10),
    discriminatedComboTarget: readInt("DISCRIM_COMBO_TARGET", 120),
    monolithFragmentCount: readInt("MONOLITH_FRAGMENT_COUNT", 12),
    monolithExtractCount: readInt("MONOLITH_EXTRACT_COUNT", 80),
    monolithSelectionCount: readInt("MONOLITH_SELECTION_COUNT", 10),
    fragmentCount: readInt("FRAGMENT_COUNT", 24),
    fragmentFanout: readInt("FRAGMENT_FANOUT", 2),
    queryCount: readInt("QUERY_COUNT", 4),
    querySelectionCount: readInt("QUERY_SELECTION_COUNT", 10),
    ladderFieldCount: readInt("LADDER_FIELD_COUNT", 4),
    ladderExtractCount: readInt("LADDER_EXTRACT_COUNT", 80),
    ladderChainDepth: readInt("LADDER_CHAIN_DEPTH", 6)
  };
}

export function memberName(index: number): string {
  return `Member${index.toString().padStart(2, "0")}`;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
