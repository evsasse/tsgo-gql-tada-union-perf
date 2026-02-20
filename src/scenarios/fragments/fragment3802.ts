import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3800 } from "./fragment3800";
import type { FragmentToken3801 } from "./fragment3801";

export const FRAGMENT_3802 = gql(`
  fragment Fragment3802 on Member161 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_161
    memberCount_161
    memberMetric_161
  }
`);

type FragmentResult3802 = ResultOf<typeof FRAGMENT_3802>;
type FragmentSelf3802 = NonNullable<FragmentResult3802>;

export type FragmentToken3802 =
  | FragmentSelf3802["__typename"]
  | FragmentSelf3802["typenameHint"] | FragmentToken3800 | FragmentToken3801;
