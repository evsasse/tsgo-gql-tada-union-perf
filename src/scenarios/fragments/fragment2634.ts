import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2632 } from "./fragment2632";
import type { FragmentToken2633 } from "./fragment2633";

export const FRAGMENT_2634 = gql(`
  fragment Fragment2634 on Member113 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_113
    memberCount_113
    memberMetric_113
  }
`);

type FragmentResult2634 = ResultOf<typeof FRAGMENT_2634>;
type FragmentSelf2634 = NonNullable<FragmentResult2634>;

export type FragmentToken2634 =
  | FragmentSelf2634["__typename"]
  | FragmentSelf2634["typenameHint"] | FragmentToken2632 | FragmentToken2633;
