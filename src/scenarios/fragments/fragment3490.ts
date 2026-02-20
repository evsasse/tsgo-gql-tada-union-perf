import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3488 } from "./fragment3488";
import type { FragmentToken3489 } from "./fragment3489";

export const FRAGMENT_3490 = gql(`
  fragment Fragment3490 on Member129 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_129
    memberCount_129
    memberMetric_129
  }
`);

type FragmentResult3490 = ResultOf<typeof FRAGMENT_3490>;
type FragmentSelf3490 = NonNullable<FragmentResult3490>;

export type FragmentToken3490 =
  | FragmentSelf3490["__typename"]
  | FragmentSelf3490["typenameHint"] | FragmentToken3488 | FragmentToken3489;
