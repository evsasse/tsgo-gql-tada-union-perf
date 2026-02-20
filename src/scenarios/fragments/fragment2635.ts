import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2633 } from "./fragment2633";
import type { FragmentToken2634 } from "./fragment2634";

export const FRAGMENT_2635 = gql(`
  fragment Fragment2635 on Member114 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_114
    memberCount_114
    memberMetric_114
  }
`);

type FragmentResult2635 = ResultOf<typeof FRAGMENT_2635>;
type FragmentSelf2635 = NonNullable<FragmentResult2635>;

export type FragmentToken2635 =
  | FragmentSelf2635["__typename"]
  | FragmentSelf2635["typenameHint"] | FragmentToken2633 | FragmentToken2634;
