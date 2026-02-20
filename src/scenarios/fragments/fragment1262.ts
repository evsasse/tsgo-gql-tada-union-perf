import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1260 } from "./fragment1260";
import type { FragmentToken1261 } from "./fragment1261";

export const FRAGMENT_1262 = gql(`
  fragment Fragment1262 on Member141 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_141
    memberCount_141
    memberMetric_141
  }
`);

type FragmentResult1262 = ResultOf<typeof FRAGMENT_1262>;
type FragmentSelf1262 = NonNullable<FragmentResult1262>;

export type FragmentToken1262 =
  | FragmentSelf1262["__typename"]
  | FragmentSelf1262["typenameHint"] | FragmentToken1260 | FragmentToken1261;
