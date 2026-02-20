import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2079 } from "./fragment2079";
import type { FragmentToken2080 } from "./fragment2080";

export const FRAGMENT_2081 = gql(`
  fragment Fragment2081 on Member120 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_120
    memberCount_120
    memberMetric_120
  }
`);

type FragmentResult2081 = ResultOf<typeof FRAGMENT_2081>;
type FragmentSelf2081 = NonNullable<FragmentResult2081>;

export type FragmentToken2081 =
  | FragmentSelf2081["__typename"]
  | FragmentSelf2081["typenameHint"] | FragmentToken2079 | FragmentToken2080;
