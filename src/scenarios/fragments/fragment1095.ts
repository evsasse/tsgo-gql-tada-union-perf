import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1093 } from "./fragment1093";
import type { FragmentToken1094 } from "./fragment1094";

export const FRAGMENT_1095 = gql(`
  fragment Fragment1095 on Member254 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_254
    memberCount_254
    memberMetric_254
  }
`);

type FragmentResult1095 = ResultOf<typeof FRAGMENT_1095>;
type FragmentSelf1095 = NonNullable<FragmentResult1095>;

export type FragmentToken1095 =
  | FragmentSelf1095["__typename"]
  | FragmentSelf1095["typenameHint"] | FragmentToken1093 | FragmentToken1094;
