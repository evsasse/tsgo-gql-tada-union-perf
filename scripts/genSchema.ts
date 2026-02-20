import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { buildSchema, printSchema } from "graphql";

const MEMBER_COUNT = 30;
const UNION_A_MEMBERS = range(0, 20);
const UNION_B_MEMBERS = range(10, 30);

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
  const searchResultMembers = [
    "UnionContainerA",
    "UnionContainerB",
    memberName(0),
    memberName(5),
    memberName(10),
    memberName(15),
    memberName(20),
    memberName(25),
    memberName(29)
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
