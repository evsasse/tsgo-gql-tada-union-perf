import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2131 } from "./fragment2131";
import type { FragmentToken2132 } from "./fragment2132";

export const FRAGMENT_2133 = gql(`
  fragment Fragment2133 on Member172 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_172
    memberCount_172
    memberMetric_172
  }
`);

type FragmentResult2133 = ResultOf<typeof FRAGMENT_2133>;
type FragmentSelf2133 = NonNullable<FragmentResult2133>;

export type FragmentToken2133 =
  | FragmentSelf2133["__typename"]
  | FragmentSelf2133["typenameHint"] | FragmentToken2131 | FragmentToken2132;
