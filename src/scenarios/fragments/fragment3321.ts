import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3319 } from "./fragment3319";
import type { FragmentToken3320 } from "./fragment3320";

export const FRAGMENT_3321 = gql(`
  fragment Fragment3321 on Member240 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_240
    memberCount_240
    memberMetric_240
  }
`);

type FragmentResult3321 = ResultOf<typeof FRAGMENT_3321>;
type FragmentSelf3321 = NonNullable<FragmentResult3321>;

export type FragmentToken3321 =
  | FragmentSelf3321["__typename"]
  | FragmentSelf3321["typenameHint"] | FragmentToken3319 | FragmentToken3320;
