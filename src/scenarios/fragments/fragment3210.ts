import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3208 } from "./fragment3208";
import type { FragmentToken3209 } from "./fragment3209";

export const FRAGMENT_3210 = gql(`
  fragment Fragment3210 on Member129 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_129
    memberCount_129
    memberMetric_129
  }
`);

type FragmentResult3210 = ResultOf<typeof FRAGMENT_3210>;
type FragmentSelf3210 = NonNullable<FragmentResult3210>;

export type FragmentToken3210 =
  | FragmentSelf3210["__typename"]
  | FragmentSelf3210["typenameHint"] | FragmentToken3208 | FragmentToken3209;
