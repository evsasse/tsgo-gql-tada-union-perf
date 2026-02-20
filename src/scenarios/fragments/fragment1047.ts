import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1045 } from "./fragment1045";
import type { FragmentToken1046 } from "./fragment1046";

export const FRAGMENT_1047 = gql(`
  fragment Fragment1047 on Member206 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_206
    memberCount_206
    memberMetric_206
  }
`);

type FragmentResult1047 = ResultOf<typeof FRAGMENT_1047>;
type FragmentSelf1047 = NonNullable<FragmentResult1047>;

export type FragmentToken1047 =
  | FragmentSelf1047["__typename"]
  | FragmentSelf1047["typenameHint"] | FragmentToken1045 | FragmentToken1046;
