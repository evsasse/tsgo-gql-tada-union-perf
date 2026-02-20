import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3209 } from "./fragment3209";
import type { FragmentToken3210 } from "./fragment3210";

export const FRAGMENT_3211 = gql(`
  fragment Fragment3211 on Member130 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_130
    memberCount_130
    memberMetric_130
  }
`);

type FragmentResult3211 = ResultOf<typeof FRAGMENT_3211>;
type FragmentSelf3211 = NonNullable<FragmentResult3211>;

export type FragmentToken3211 =
  | FragmentSelf3211["__typename"]
  | FragmentSelf3211["typenameHint"] | FragmentToken3209 | FragmentToken3210;
