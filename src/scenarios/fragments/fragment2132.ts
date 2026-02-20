import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2130 } from "./fragment2130";
import type { FragmentToken2131 } from "./fragment2131";

export const FRAGMENT_2132 = gql(`
  fragment Fragment2132 on Member171 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_171
    memberCount_171
    memberMetric_171
  }
`);

type FragmentResult2132 = ResultOf<typeof FRAGMENT_2132>;
type FragmentSelf2132 = NonNullable<FragmentResult2132>;

export type FragmentToken2132 =
  | FragmentSelf2132["__typename"]
  | FragmentSelf2132["typenameHint"] | FragmentToken2130 | FragmentToken2131;
