import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2816 } from "./fragment2816";
import type { FragmentToken2817 } from "./fragment2817";

export const FRAGMENT_2818 = gql(`
  fragment Fragment2818 on Member17 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_17
    memberCount_17
    memberMetric_17
  }
`);

type FragmentResult2818 = ResultOf<typeof FRAGMENT_2818>;
type FragmentSelf2818 = NonNullable<FragmentResult2818>;

export type FragmentToken2818 =
  | FragmentSelf2818["__typename"]
  | FragmentSelf2818["typenameHint"] | FragmentToken2816 | FragmentToken2817;
