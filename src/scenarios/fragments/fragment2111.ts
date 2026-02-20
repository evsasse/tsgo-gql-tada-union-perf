import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2109 } from "./fragment2109";
import type { FragmentToken2110 } from "./fragment2110";

export const FRAGMENT_2111 = gql(`
  fragment Fragment2111 on Member150 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_150
    memberCount_150
    memberMetric_150
  }
`);

type FragmentResult2111 = ResultOf<typeof FRAGMENT_2111>;
type FragmentSelf2111 = NonNullable<FragmentResult2111>;

export type FragmentToken2111 =
  | FragmentSelf2111["__typename"]
  | FragmentSelf2111["typenameHint"] | FragmentToken2109 | FragmentToken2110;
