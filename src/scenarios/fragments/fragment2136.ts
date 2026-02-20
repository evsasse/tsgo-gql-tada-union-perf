import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2134 } from "./fragment2134";
import type { FragmentToken2135 } from "./fragment2135";

export const FRAGMENT_2136 = gql(`
  fragment Fragment2136 on Member175 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_175
    memberCount_175
    memberMetric_175
  }
`);

type FragmentResult2136 = ResultOf<typeof FRAGMENT_2136>;
type FragmentSelf2136 = NonNullable<FragmentResult2136>;

export type FragmentToken2136 =
  | FragmentSelf2136["__typename"]
  | FragmentSelf2136["typenameHint"] | FragmentToken2134 | FragmentToken2135;
