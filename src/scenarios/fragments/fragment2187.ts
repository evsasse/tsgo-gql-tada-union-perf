import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2185 } from "./fragment2185";
import type { FragmentToken2186 } from "./fragment2186";

export const FRAGMENT_2187 = gql(`
  fragment Fragment2187 on Member226 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_226
    memberCount_226
    memberMetric_226
  }
`);

type FragmentResult2187 = ResultOf<typeof FRAGMENT_2187>;
type FragmentSelf2187 = NonNullable<FragmentResult2187>;

export type FragmentToken2187 =
  | FragmentSelf2187["__typename"]
  | FragmentSelf2187["typenameHint"] | FragmentToken2185 | FragmentToken2186;
