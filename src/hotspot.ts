import { gql } from "./gqlClient";
import type { ResultOf, VariablesOf } from "./gqlClient";

export const HotspotDocument = gql(`
  query HotspotQuery($limit: Int!) {
    feedA(limit: $limit) {
      __typename
      ... on Member00 { memberKey_00 memberMetric_00 }
      ... on Member01 { memberKey_01 memberMetric_01 }
      ... on Member02 { memberKey_02 memberMetric_02 }
      ... on Member03 { memberKey_03 memberMetric_03 }
      ... on Member04 { memberKey_04 memberMetric_04 }
      ... on Member05 { memberKey_05 memberMetric_05 }
      ... on Member06 { memberKey_06 memberMetric_06 }
      ... on Member07 { memberKey_07 memberMetric_07 }
      ... on Member08 { memberKey_08 memberMetric_08 }
      ... on Member09 { memberKey_09 memberMetric_09 }
      ... on Member10 { memberKey_10 memberMetric_10 }
      ... on Member11 { memberKey_11 memberMetric_11 }
      ... on Member12 { memberKey_12 memberMetric_12 }
      ... on Member13 { memberKey_13 memberMetric_13 }
      ... on Member14 { memberKey_14 memberMetric_14 }
      ... on Member15 { memberKey_15 memberMetric_15 }
      ... on Member16 { memberKey_16 memberMetric_16 }
      ... on Member17 { memberKey_17 memberMetric_17 }
      ... on Member18 { memberKey_18 memberMetric_18 }
      ... on Member19 { memberKey_19 memberMetric_19 }
    }
    feedB(limit: $limit) {
      __typename
      ... on Member10 { memberKey_10 memberMetric_10 }
      ... on Member11 { memberKey_11 memberMetric_11 }
      ... on Member12 { memberKey_12 memberMetric_12 }
      ... on Member13 { memberKey_13 memberMetric_13 }
      ... on Member14 { memberKey_14 memberMetric_14 }
      ... on Member15 { memberKey_15 memberMetric_15 }
      ... on Member16 { memberKey_16 memberMetric_16 }
      ... on Member17 { memberKey_17 memberMetric_17 }
      ... on Member18 { memberKey_18 memberMetric_18 }
      ... on Member19 { memberKey_19 memberMetric_19 }
      ... on Member20 { memberKey_20 memberMetric_20 }
      ... on Member21 { memberKey_21 memberMetric_21 }
      ... on Member22 { memberKey_22 memberMetric_22 }
      ... on Member23 { memberKey_23 memberMetric_23 }
      ... on Member24 { memberKey_24 memberMetric_24 }
      ... on Member25 { memberKey_25 memberMetric_25 }
      ... on Member26 { memberKey_26 memberMetric_26 }
      ... on Member27 { memberKey_27 memberMetric_27 }
      ... on Member28 { memberKey_28 memberMetric_28 }
      ... on Member29 { memberKey_29 memberMetric_29 }
    }
    mixed(limit: $limit) {
      __typename
      ... on UnionContainerA {
        id
        label
        item {
          __typename
          ... on Member00 { memberKey_00 memberMetric_00 }
          ... on Member05 { memberKey_05 memberMetric_05 }
          ... on Member10 { memberKey_10 memberMetric_10 }
          ... on Member15 { memberKey_15 memberMetric_15 }
          ... on Member19 { memberKey_19 memberMetric_19 }
        }
      }
      ... on UnionContainerB {
        id
        label
        item {
          __typename
          ... on Member10 { memberKey_10 memberMetric_10 }
          ... on Member15 { memberKey_15 memberMetric_15 }
          ... on Member20 { memberKey_20 memberMetric_20 }
          ... on Member25 { memberKey_25 memberMetric_25 }
          ... on Member29 { memberKey_29 memberMetric_29 }
        }
      }
      ... on Member00 { memberKey_00 memberMetric_00 }
      ... on Member10 { memberKey_10 memberMetric_10 }
      ... on Member20 { memberKey_20 memberMetric_20 }
      ... on Member29 { memberKey_29 memberMetric_29 }
    }
    featured {
      __typename
      ... on UnionContainerA { id }
      ... on UnionContainerB { id }
      ... on Member00 { id }
      ... on Member29 { id }
    }
  }
`);

type HotspotResult = ResultOf<typeof HotspotDocument>;
type HotspotVariables = VariablesOf<typeof HotspotDocument>;

type FeedAItem = NonNullable<HotspotResult["feedA"]>[number];
type FeedBItem = NonNullable<HotspotResult["feedB"]>[number];
type MixedItem = NonNullable<HotspotResult["mixed"]>[number];
type Featured = NonNullable<HotspotResult["featured"]>;

type FeedA00 = Extract<FeedAItem, { __typename: "Member00" }>;
type FeedA01 = Extract<FeedAItem, { __typename: "Member01" }>;
type FeedA02 = Extract<FeedAItem, { __typename: "Member02" }>;
type FeedA03 = Extract<FeedAItem, { __typename: "Member03" }>;
type FeedA04 = Extract<FeedAItem, { __typename: "Member04" }>;
type FeedA05 = Extract<FeedAItem, { __typename: "Member05" }>;
type FeedA06 = Extract<FeedAItem, { __typename: "Member06" }>;
type FeedA07 = Extract<FeedAItem, { __typename: "Member07" }>;
type FeedA08 = Extract<FeedAItem, { __typename: "Member08" }>;
type FeedA09 = Extract<FeedAItem, { __typename: "Member09" }>;
type FeedA10 = Extract<FeedAItem, { __typename: "Member10" }>;
type FeedA11 = Extract<FeedAItem, { __typename: "Member11" }>;
type FeedA12 = Extract<FeedAItem, { __typename: "Member12" }>;
type FeedA13 = Extract<FeedAItem, { __typename: "Member13" }>;
type FeedA14 = Extract<FeedAItem, { __typename: "Member14" }>;
type FeedA15 = Extract<FeedAItem, { __typename: "Member15" }>;
type FeedA16 = Extract<FeedAItem, { __typename: "Member16" }>;
type FeedA17 = Extract<FeedAItem, { __typename: "Member17" }>;
type FeedA18 = Extract<FeedAItem, { __typename: "Member18" }>;
type FeedA19 = Extract<FeedAItem, { __typename: "Member19" }>;

type FeedB10 = Extract<FeedBItem, { __typename: "Member10" }>;
type FeedB11 = Extract<FeedBItem, { __typename: "Member11" }>;
type FeedB12 = Extract<FeedBItem, { __typename: "Member12" }>;
type FeedB13 = Extract<FeedBItem, { __typename: "Member13" }>;
type FeedB14 = Extract<FeedBItem, { __typename: "Member14" }>;
type FeedB15 = Extract<FeedBItem, { __typename: "Member15" }>;
type FeedB16 = Extract<FeedBItem, { __typename: "Member16" }>;
type FeedB17 = Extract<FeedBItem, { __typename: "Member17" }>;
type FeedB18 = Extract<FeedBItem, { __typename: "Member18" }>;
type FeedB19 = Extract<FeedBItem, { __typename: "Member19" }>;
type FeedB20 = Extract<FeedBItem, { __typename: "Member20" }>;
type FeedB21 = Extract<FeedBItem, { __typename: "Member21" }>;
type FeedB22 = Extract<FeedBItem, { __typename: "Member22" }>;
type FeedB23 = Extract<FeedBItem, { __typename: "Member23" }>;
type FeedB24 = Extract<FeedBItem, { __typename: "Member24" }>;
type FeedB25 = Extract<FeedBItem, { __typename: "Member25" }>;
type FeedB26 = Extract<FeedBItem, { __typename: "Member26" }>;
type FeedB27 = Extract<FeedBItem, { __typename: "Member27" }>;
type FeedB28 = Extract<FeedBItem, { __typename: "Member28" }>;
type FeedB29 = Extract<FeedBItem, { __typename: "Member29" }>;

type FeedAMetrics = [
  NonNullable<FeedA00["memberMetric_00"]>,
  NonNullable<FeedA01["memberMetric_01"]>,
  NonNullable<FeedA02["memberMetric_02"]>,
  NonNullable<FeedA03["memberMetric_03"]>,
  NonNullable<FeedA04["memberMetric_04"]>,
  NonNullable<FeedA05["memberMetric_05"]>,
  NonNullable<FeedA06["memberMetric_06"]>,
  NonNullable<FeedA07["memberMetric_07"]>,
  NonNullable<FeedA08["memberMetric_08"]>,
  NonNullable<FeedA09["memberMetric_09"]>,
  NonNullable<FeedA10["memberMetric_10"]>,
  NonNullable<FeedA11["memberMetric_11"]>,
  NonNullable<FeedA12["memberMetric_12"]>,
  NonNullable<FeedA13["memberMetric_13"]>,
  NonNullable<FeedA14["memberMetric_14"]>,
  NonNullable<FeedA15["memberMetric_15"]>,
  NonNullable<FeedA16["memberMetric_16"]>,
  NonNullable<FeedA17["memberMetric_17"]>,
  NonNullable<FeedA18["memberMetric_18"]>,
  NonNullable<FeedA19["memberMetric_19"]>
];

type FeedBMetrics = [
  NonNullable<FeedB10["memberMetric_10"]>,
  NonNullable<FeedB11["memberMetric_11"]>,
  NonNullable<FeedB12["memberMetric_12"]>,
  NonNullable<FeedB13["memberMetric_13"]>,
  NonNullable<FeedB14["memberMetric_14"]>,
  NonNullable<FeedB15["memberMetric_15"]>,
  NonNullable<FeedB16["memberMetric_16"]>,
  NonNullable<FeedB17["memberMetric_17"]>,
  NonNullable<FeedB18["memberMetric_18"]>,
  NonNullable<FeedB19["memberMetric_19"]>,
  NonNullable<FeedB20["memberMetric_20"]>,
  NonNullable<FeedB21["memberMetric_21"]>,
  NonNullable<FeedB22["memberMetric_22"]>,
  NonNullable<FeedB23["memberMetric_23"]>,
  NonNullable<FeedB24["memberMetric_24"]>,
  NonNullable<FeedB25["memberMetric_25"]>,
  NonNullable<FeedB26["memberMetric_26"]>,
  NonNullable<FeedB27["memberMetric_27"]>,
  NonNullable<FeedB28["memberMetric_28"]>,
  NonNullable<FeedB29["memberMetric_29"]>
];

type UnionItem = FeedAItem | FeedBItem;
type UnionTypename = UnionItem["__typename"];
type ByTypename<TName extends UnionTypename> = Extract<UnionItem, { __typename: TName }>;

type RelationMatrix = {
  [Left in UnionTypename]: {
    [Right in UnionTypename]:
      | (NonNullable<ByTypename<Left>> extends NonNullable<ByTypename<Right>> ? Left : never)
      | (NonNullable<ByTypename<Right>> extends NonNullable<ByTypename<Left>> ? Right : never)
      | Extract<ByTypename<Left>, { __typename: Right }>
      | Extract<ByTypename<Right>, { __typename: Left }>;
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
type RelationMatrix17 = { [K in keyof RelationMatrix16]: RelationMatrix16[K] };
type RelationMatrix18 = { [K in keyof RelationMatrix17]: RelationMatrix17[K] };
type RelationMatrix19 = { [K in keyof RelationMatrix18]: RelationMatrix18[K] };
type RelationMatrix20 = { [K in keyof RelationMatrix19]: RelationMatrix19[K] };
type Clone<T> = { [K in keyof T]: T[K] };
type RelationMatrixAlt = {
  [Left in UnionTypename]: {
    [Right in UnionTypename]:
      | (Clone<ByTypename<Left>> extends Clone<ByTypename<Right>> ? Left : never)
      | (Clone<ByTypename<Right>> extends Clone<ByTypename<Left>> ? Right : never)
      | Extract<Clone<ByTypename<Left>>, { __typename: Right }>
      | Extract<Clone<ByTypename<Right>>, { __typename: Left }>;
  };
};
type RelationMatrixAlt1 = { [K in keyof RelationMatrixAlt]: RelationMatrixAlt[K] };
type RelationMatrixAlt2 = { [K in keyof RelationMatrixAlt1]: RelationMatrixAlt1[K] };
type RelationMatrixAlt3 = { [K in keyof RelationMatrixAlt2]: RelationMatrixAlt2[K] };
type RelationMatrixAlt4 = { [K in keyof RelationMatrixAlt3]: RelationMatrixAlt3[K] };
type RelationMatrixAlt5 = { [K in keyof RelationMatrixAlt4]: RelationMatrixAlt4[K] };
type RelationMatrixAlt6 = { [K in keyof RelationMatrixAlt5]: RelationMatrixAlt5[K] };
type RelationMatrixAlt7 = { [K in keyof RelationMatrixAlt6]: RelationMatrixAlt6[K] };
type RelationMatrixAlt8 = { [K in keyof RelationMatrixAlt7]: RelationMatrixAlt7[K] };
type RelationMatrixCell = RelationMatrix20[UnionTypename][UnionTypename] | RelationMatrixAlt8[UnionTypename][UnionTypename];

type MixedContainerA = Extract<MixedItem, { __typename: "UnionContainerA" }>;
type MixedContainerB = Extract<MixedItem, { __typename: "UnionContainerB" }>;
type MixedMember00 = Extract<MixedItem, { __typename: "Member00" }>;
type MixedMember10 = Extract<MixedItem, { __typename: "Member10" }>;
type MixedMember20 = Extract<MixedItem, { __typename: "Member20" }>;
type MixedMember29 = Extract<MixedItem, { __typename: "Member29" }>;

type FeaturedA = Extract<Featured, { __typename: "UnionContainerA" }>;
type FeaturedB = Extract<Featured, { __typename: "UnionContainerB" }>;
type Featured00 = Extract<Featured, { __typename: "Member00" }>;
type Featured29 = Extract<Featured, { __typename: "Member29" }>;

export type TypePressureSnapshot = {
  feedA: FeedAMetrics[number];
  feedB: FeedBMetrics[number];
  matrix: keyof RelationMatrix20;
  matrixCell: RelationMatrixCell;
  mixed:
    | MixedContainerA["label"]
    | MixedContainerB["label"]
    | MixedMember00["memberKey_00"]
    | MixedMember10["memberKey_10"]
    | MixedMember20["memberKey_20"]
    | MixedMember29["memberKey_29"];
  featured: FeaturedA["id"] | FeaturedB["id"] | Featured00["id"] | Featured29["id"];
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
    feedA:
      feedAValue && "__typename" in feedAValue && "memberMetric_10" in feedAValue
        ? (feedAValue.memberMetric_10 ?? 0)
        : 0,
    feedB:
      feedBValue && "__typename" in feedBValue && "memberMetric_20" in feedBValue
        ? (feedBValue.memberMetric_20 ?? 0)
        : 0,
    matrix: "Member10",
    matrixCell: undefined as unknown as RelationMatrixCell,
    mixed:
      (mixedValue &&
        "__typename" in mixedValue &&
        "label" in mixedValue &&
        typeof mixedValue.label === "string" &&
        mixedValue.label) ||
      "none",
    featured:
      (featuredValue &&
        "__typename" in featuredValue &&
        "id" in featuredValue &&
        typeof featuredValue.id === "string" &&
        featuredValue.id) ||
      "none"
  };
}
