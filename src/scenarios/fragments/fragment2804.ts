import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2802 } from "./fragment2802";
import type { FragmentToken2803 } from "./fragment2803";

export const FRAGMENT_2804 = gql(`
  fragment Fragment2804 on Member03 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_03
    memberCount_03
    memberMetric_03
  }
`);

type FragmentResult2804 = ResultOf<typeof FRAGMENT_2804>;
type FragmentSelf2804 = NonNullable<FragmentResult2804>;

export type FragmentToken2804 =
  | FragmentSelf2804["__typename"]
  | FragmentSelf2804["typenameHint"] | FragmentToken2802 | FragmentToken2803;
