import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1091 } from "./fragment1091";
import type { FragmentToken1092 } from "./fragment1092";

export const FRAGMENT_1093 = gql(`
  fragment Fragment1093 on Member252 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_252
    memberCount_252
    memberMetric_252
  }
`);

type FragmentResult1093 = ResultOf<typeof FRAGMENT_1093>;
type FragmentSelf1093 = NonNullable<FragmentResult1093>;

export type FragmentToken1093 =
  | FragmentSelf1093["__typename"]
  | FragmentSelf1093["typenameHint"] | FragmentToken1091 | FragmentToken1092;
