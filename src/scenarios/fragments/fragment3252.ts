import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3250 } from "./fragment3250";
import type { FragmentToken3251 } from "./fragment3251";

export const FRAGMENT_3252 = gql(`
  fragment Fragment3252 on Member171 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_171
    memberCount_171
    memberMetric_171
  }
`);

type FragmentResult3252 = ResultOf<typeof FRAGMENT_3252>;
type FragmentSelf3252 = NonNullable<FragmentResult3252>;

export type FragmentToken3252 =
  | FragmentSelf3252["__typename"]
  | FragmentSelf3252["typenameHint"] | FragmentToken3250 | FragmentToken3251;
