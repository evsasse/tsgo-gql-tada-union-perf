import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3320 } from "./fragment3320";
import type { FragmentToken3321 } from "./fragment3321";

export const FRAGMENT_3322 = gql(`
  fragment Fragment3322 on Member241 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_241
    memberCount_241
    memberMetric_241
  }
`);

type FragmentResult3322 = ResultOf<typeof FRAGMENT_3322>;
type FragmentSelf3322 = NonNullable<FragmentResult3322>;

export type FragmentToken3322 =
  | FragmentSelf3322["__typename"]
  | FragmentSelf3322["typenameHint"] | FragmentToken3320 | FragmentToken3321;
