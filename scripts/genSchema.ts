import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { buildSchema, printSchema } from "graphql";

function readInt(name: string, fallback: number, min = 1): number {
  const raw = process.env[name];
  if (!raw) return fallback;
  const parsed = Number.parseInt(raw, 10);
  if (!Number.isFinite(parsed) || parsed < min) {
    throw new Error(`${name} must be an integer >= ${min}`);
  }
  return parsed;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

const MEMBER_COUNT = readInt("UNION_MEMBER_COUNT", 200);
const DEFAULT_UNION_A_COUNT = clamp(Math.floor(MEMBER_COUNT * 0.75), 1, MEMBER_COUNT);
const DEFAULT_UNION_B_START = clamp(Math.floor(MEMBER_COUNT * 0.25), 0, MEMBER_COUNT - 1);
const UNION_A_COUNT = clamp(readInt("UNION_A_COUNT", DEFAULT_UNION_A_COUNT), 1, MEMBER_COUNT);
const UNION_B_START = clamp(readInt("UNION_B_START", DEFAULT_UNION_B_START, 0), 0, MEMBER_COUNT - 1);
const UNION_A_MEMBERS = range(0, UNION_A_COUNT);
const UNION_B_MEMBERS = range(UNION_B_START, MEMBER_COUNT);

function range(start: number, end: number): number[] {
  const values: number[] = [];
  for (let i = start; i < end; i += 1) {
    values.push(i);
  }
  return values;
}

function memberName(index: number): string {
  return `Member${index.toString().padStart(2, "0")}`;
}

function unique(values: number[]): number[] {
  return Array.from(new Set(values));
}

function renderMemberType(index: number): string {
  const suffix = index.toString().padStart(2, "0");
  return `type ${memberName(index)} {
  id: ID!
  typenameHint: String!
  displayName: String
  overlapA: String
  overlapB: Int
  overlapC: Float
  overlapFlag: Boolean!
  payload: VariantPayload
  memberKey_${suffix}: String!
  memberCount_${suffix}: Int!
  memberMetric_${suffix}: Float
  memberToggle_${suffix}: Boolean
}`;
}

function renderSchema(): string {
  const memberTypes = range(0, MEMBER_COUNT).map((index) => renderMemberType(index));
  const unionA = UNION_A_MEMBERS.map((index) => memberName(index)).join(" | ");
  const unionB = UNION_B_MEMBERS.map((index) => memberName(index)).join(" | ");
  const sampleMembers = unique([
    0,
    Math.floor(MEMBER_COUNT * 0.1),
    Math.floor(MEMBER_COUNT * 0.2),
    Math.floor(MEMBER_COUNT * 0.3),
    Math.floor(MEMBER_COUNT * 0.4),
    Math.floor(MEMBER_COUNT * 0.6),
    Math.floor(MEMBER_COUNT * 0.75),
    Math.floor(MEMBER_COUNT * 0.9),
    MEMBER_COUNT - 1
  ]).map((index) => clamp(index, 0, MEMBER_COUNT - 1));
  const searchResultMembers = [
    "UnionContainerA",
    "UnionContainerB",
    ...sampleMembers.map((index) => memberName(index))
  ].join(" | ");

  const sdl = [
    "schema {",
    "  query: Query",
    "}",
    "",
    "type VariantPayload {",
    "  key: String!",
    "  score: Float!",
    "  tag: String",
    "}",
    "",
    ...memberTypes,
    "",
    `union SearchUnionA = ${unionA}`,
    `union SearchUnionB = ${unionB}`,
    "",
    "type UnionContainerA {",
    "  id: ID!",
    "  item: SearchUnionA!",
    "  label: String",
    "}",
    "",
    "type UnionContainerB {",
    "  id: ID!",
    "  item: SearchUnionB!",
    "  label: String",
    "}",
    "",
    `union SearchResult = ${searchResultMembers}`,
    "",
    "type ResultEnvelope {",
    "  id: ID!",
    "  left: SearchUnionA!",
    "  right: SearchUnionB!",
    "  alt: SearchResult!",
    "}",
    "",
    "type Query {",
    "  feedA(limit: Int!): [SearchUnionA!]!",
    "  feedB(limit: Int!): [SearchUnionB!]!",
    "  mixed(limit: Int!): [SearchResult!]!",
    "  envelopes(limit: Int!): [ResultEnvelope!]!",
    "  featured: SearchResult!",
    "}"
  ].join("\n");

  const validated = buildSchema(sdl);
  return `${printSchema(validated).trimEnd()}\n`;
}

const schemaOutput = renderSchema();
const schemaPath = resolve(process.cwd(), "schema.graphql");

writeFileSync(schemaPath, schemaOutput, "utf8");
console.log(
  `Wrote deterministic schema to ${schemaPath} (${MEMBER_COUNT} members, unions: ${UNION_A_MEMBERS.length}/${UNION_B_MEMBERS.length})`
);
