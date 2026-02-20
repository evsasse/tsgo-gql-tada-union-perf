import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1421 } from "./fragment1421";
import type { FragmentToken1422 } from "./fragment1422";

export const FRAGMENT_1423 = gql(`
  fragment Fragment1423 on Member22 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_22
    memberCount_22
    memberMetric_22
  }
`);

type FragmentResult1423 = ResultOf<typeof FRAGMENT_1423>;
type FragmentSelf1423 = NonNullable<FragmentResult1423>;

export type FragmentToken1423 =
  | FragmentSelf1423["__typename"]
  | FragmentSelf1423["typenameHint"] | FragmentToken1421 | FragmentToken1422;
