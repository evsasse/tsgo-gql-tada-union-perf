import { gql } from "./gqlClient";
import type { ResultOf, VariablesOf } from "./gqlClient";

export const HotspotDocument = gql(`
  query HotspotQuery($limit: Int!) {
    feedA(limit: $limit) {
      __typename
      ... on Member00 { typenameHint overlapA memberMetric_00 }
      ... on Member12 { typenameHint overlapA memberMetric_12 }
      ... on Member25 { typenameHint overlapA memberMetric_25 }
      ... on Member37 { typenameHint overlapA memberMetric_37 }
      ... on Member49 { typenameHint overlapA memberMetric_49 }
    }
    feedB(limit: $limit) {
      __typename
      ... on Member20 { typenameHint overlapB memberMetric_20 }
      ... on Member33 { typenameHint overlapB memberMetric_33 }
      ... on Member45 { typenameHint overlapB memberMetric_45 }
      ... on Member57 { typenameHint overlapB memberMetric_57 }
      ... on Member69 { typenameHint overlapB memberMetric_69 }
    }
    mixed(limit: $limit) {
      __typename
      ... on UnionContainerA {
        id
        label
        item {
          __typename
          ... on Member00 { typenameHint overlapA }
          ... on Member12 { typenameHint overlapA }
          ... on Member25 { typenameHint overlapA }
          ... on Member37 { typenameHint overlapA }
          ... on Member49 { typenameHint overlapA }
        }
      }
      ... on UnionContainerB {
        id
        label
        item {
          __typename
          ... on Member20 { typenameHint overlapB }
          ... on Member33 { typenameHint overlapB }
          ... on Member45 { typenameHint overlapB }
          ... on Member57 { typenameHint overlapB }
          ... on Member69 { typenameHint overlapB }
        }
      }
      ... on Member00 { typenameHint overlapA }
      ... on Member20 { typenameHint overlapB }
      ... on Member40 { typenameHint overlapA }
      ... on Member60 { typenameHint overlapB }
      ... on Member69 { typenameHint overlapA }
    }
    featured {
      __typename
      ... on UnionContainerA {
        id
        label
        item {
          __typename
          ... on Member00 { typenameHint overlapA }
          ... on Member25 { typenameHint overlapA }
          ... on Member49 { typenameHint overlapA }
        }
      }
      ... on UnionContainerB {
        id
        label
        item {
          __typename
          ... on Member20 { typenameHint overlapB }
          ... on Member45 { typenameHint overlapB }
          ... on Member69 { typenameHint overlapB }
        }
      }
      ... on Member00 { typenameHint overlapA }
      ... on Member20 { typenameHint overlapB }
      ... on Member40 { typenameHint overlapA }
      ... on Member60 { typenameHint overlapB }
      ... on Member69 { typenameHint overlapA }
    }
  }
`);

type HotspotResult = ResultOf<typeof HotspotDocument>;
type HotspotVariables = VariablesOf<typeof HotspotDocument>;

type FeedAItem = NonNullable<HotspotResult["feedA"]>[number];
type FeedBItem = NonNullable<HotspotResult["feedB"]>[number];
type MixedItem = NonNullable<HotspotResult["mixed"]>[number];
type Featured = NonNullable<HotspotResult["featured"]>;

type MixedContainerA = Extract<MixedItem, { __typename: "UnionContainerA" }>;
type MixedContainerB = Extract<MixedItem, { __typename: "UnionContainerB" }>;
type MixedContainerAItem = NonNullable<MixedContainerA["item"]>;
type MixedContainerBItem = NonNullable<MixedContainerB["item"]>;

type UnionItem = FeedAItem | FeedBItem | MixedContainerAItem | MixedContainerBItem;
type UnionTypename = UnionItem["__typename"];
type ByTypename<TName extends UnionTypename> = Extract<UnionItem, { __typename: TName }>;
type RelatedPair<Left extends UnionTypename, Right extends UnionTypename> =
  | (ByTypename<Left> extends ByTypename<Right> ? Left : never)
  | (ByTypename<Right> extends ByTypename<Left> ? Right : never)
  | Extract<ByTypename<Left>, { __typename: Right }>
  | Extract<ByTypename<Right>, { __typename: Left }>;

type RelationMatrix = {
  [Left in UnionTypename]: {
    [Right in UnionTypename]: RelatedPair<Left, Right>;
  };
};

type RelationMatrix1 = { [K in keyof RelationMatrix]: RelationMatrix[K] };
type RelationMatrix2 = { [K in keyof RelationMatrix1]: RelationMatrix1[K] };
type RelationMatrix3 = { [K in keyof RelationMatrix2]: RelationMatrix2[K] };
type RelationMatrix4 = { [K in keyof RelationMatrix3]: RelationMatrix3[K] };
type RelationMatrix5 = { [K in keyof RelationMatrix4]: RelationMatrix4[K] };
type RelationMatrix6 = { [K in keyof RelationMatrix5]: RelationMatrix5[K] };
type RelationMatrix7 = { [K in keyof RelationMatrix6]: RelationMatrix6[K] };
type RelationMatrix8 = { [K in keyof RelationMatrix7]: RelationMatrix7[K] };
type RelationMatrix9 = { [K in keyof RelationMatrix8]: RelationMatrix8[K] };
type RelationMatrix10 = { [K in keyof RelationMatrix9]: RelationMatrix9[K] };
type RelationMatrix11 = { [K in keyof RelationMatrix10]: RelationMatrix10[K] };
type RelationMatrix12 = { [K in keyof RelationMatrix11]: RelationMatrix11[K] };
type RelationMatrix13 = { [K in keyof RelationMatrix12]: RelationMatrix12[K] };
type RelationMatrix14 = { [K in keyof RelationMatrix13]: RelationMatrix13[K] };
type RelationMatrix15 = { [K in keyof RelationMatrix14]: RelationMatrix14[K] };
type RelationMatrix16 = { [K in keyof RelationMatrix15]: RelationMatrix15[K] };

type RelationMatrixAlt = {
  [Left in UnionTypename]: {
    [Right in UnionTypename]:
      | RelatedPair<Left, Right>
      | (ByTypename<Left> extends { typenameHint: infer LH extends string } ? LH : never)
      | (ByTypename<Right> extends { typenameHint: infer RH extends string } ? RH : never);
  };
};
type RelationMatrixAlt1 = { [K in keyof RelationMatrixAlt]: RelationMatrixAlt[K] };
type RelationMatrixAlt2 = { [K in keyof RelationMatrixAlt1]: RelationMatrixAlt1[K] };
type RelationMatrixAlt3 = { [K in keyof RelationMatrixAlt2]: RelationMatrixAlt2[K] };
type RelationMatrixAlt4 = { [K in keyof RelationMatrixAlt3]: RelationMatrixAlt3[K] };
type RelationMatrixAlt5 = { [K in keyof RelationMatrixAlt4]: RelationMatrixAlt4[K] };
type RelationMatrixAlt6 = { [K in keyof RelationMatrixAlt5]: RelationMatrixAlt5[K] };

type PairwiseMatrix = {
  [Left in UnionTypename]: {
    [Right in UnionTypename]:
      | RelationMatrix16[Left][Right]
      | RelationMatrixAlt6[Left][Right]
      | Extract<ByTypename<Left>, { __typename: Left }>
      | Extract<ByTypename<Right>, { __typename: Right }>;
  };
};
type PairwiseMatrix1 = { [K in keyof PairwiseMatrix]: PairwiseMatrix[K] };
type PairwiseMatrix2 = { [K in keyof PairwiseMatrix1]: PairwiseMatrix1[K] };
type PairwiseMatrix3 = { [K in keyof PairwiseMatrix2]: PairwiseMatrix2[K] };
type RelationMatrixCell = PairwiseMatrix3["Member25"]["Member45"];

type FeaturedA = Extract<Featured, { __typename: "UnionContainerA" }>;
type FeaturedB = Extract<Featured, { __typename: "UnionContainerB" }>;
type Featured00 = Extract<Featured, { __typename: "Member00" }>;
type Featured20 = Extract<Featured, { __typename: "Member20" }>;
type Featured40 = Extract<Featured, { __typename: "Member40" }>;
type Featured60 = Extract<Featured, { __typename: "Member60" }>;
type Featured69 = Extract<Featured, { __typename: "Member69" }>;

export type TypePressureSnapshot = {
  feedA: FeedAItem["__typename"] | "none";
  feedB: FeedBItem["__typename"] | "none";
  matrix: keyof RelationMatrix16;
  matrixCell: RelationMatrixCell;
  mixed: MixedItem["__typename"] | "none";
  featured:
    | FeaturedA["id"]
    | FeaturedB["id"]
    | Featured00["typenameHint"]
    | Featured20["typenameHint"]
    | Featured40["typenameHint"]
    | Featured60["typenameHint"]
    | Featured69["typenameHint"];
};

export function createHotspotVariables(limit: number): HotspotVariables {
  return { limit };
}

export function collectTypePressure(result: HotspotResult): TypePressureSnapshot {
  const feedAValue = result.feedA?.[0];
  const feedBValue = result.feedB?.[0];
  const mixedValue = result.mixed?.[0];
  const featuredValue = result.featured;

  return {
    feedA: (feedAValue && "__typename" in feedAValue && feedAValue.__typename) || "none",
    feedB: (feedBValue && "__typename" in feedBValue && feedBValue.__typename) || "none",
    matrix: "Member25",
    matrixCell: undefined as unknown as RelationMatrixCell,
    mixed:
      (mixedValue && "__typename" in mixedValue && mixedValue.__typename) ||
      "none",
    featured:
      (featuredValue &&
        "__typename" in featuredValue &&
        "typenameHint" in featuredValue &&
        typeof featuredValue.typenameHint === "string" &&
        featuredValue.typenameHint) ||
      "none"
  };
}
