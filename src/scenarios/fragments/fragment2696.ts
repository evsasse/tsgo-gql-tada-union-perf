import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2694 } from "./fragment2694";
import type { FragmentToken2695 } from "./fragment2695";

export const FRAGMENT_2696 = gql(`
  fragment Fragment2696 on Member175 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_175
    memberCount_175
    memberMetric_175
  }
`);

type FragmentResult2696 = ResultOf<typeof FRAGMENT_2696>;
type FragmentSelf2696 = NonNullable<FragmentResult2696>;

export type FragmentToken2696 =
  | FragmentSelf2696["__typename"]
  | FragmentSelf2696["typenameHint"] | FragmentToken2694 | FragmentToken2695;
