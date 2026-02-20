import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1248 } from "./fragment1248";
import type { FragmentToken1249 } from "./fragment1249";

export const FRAGMENT_1250 = gql(`
  fragment Fragment1250 on Member129 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_129
    memberCount_129
    memberMetric_129
  }
`);

type FragmentResult1250 = ResultOf<typeof FRAGMENT_1250>;
type FragmentSelf1250 = NonNullable<FragmentResult1250>;

export type FragmentToken1250 =
  | FragmentSelf1250["__typename"]
  | FragmentSelf1250["typenameHint"] | FragmentToken1248 | FragmentToken1249;
