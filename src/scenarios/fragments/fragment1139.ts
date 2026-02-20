import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1137 } from "./fragment1137";
import type { FragmentToken1138 } from "./fragment1138";

export const FRAGMENT_1139 = gql(`
  fragment Fragment1139 on Member18 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_18
    memberCount_18
    memberMetric_18
  }
`);

type FragmentResult1139 = ResultOf<typeof FRAGMENT_1139>;
type FragmentSelf1139 = NonNullable<FragmentResult1139>;

export type FragmentToken1139 =
  | FragmentSelf1139["__typename"]
  | FragmentSelf1139["typenameHint"] | FragmentToken1137 | FragmentToken1138;
