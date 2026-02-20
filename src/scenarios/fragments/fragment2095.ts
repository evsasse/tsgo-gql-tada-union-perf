import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2093 } from "./fragment2093";
import type { FragmentToken2094 } from "./fragment2094";

export const FRAGMENT_2095 = gql(`
  fragment Fragment2095 on Member134 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_134
    memberCount_134
    memberMetric_134
  }
`);

type FragmentResult2095 = ResultOf<typeof FRAGMENT_2095>;
type FragmentSelf2095 = NonNullable<FragmentResult2095>;

export type FragmentToken2095 =
  | FragmentSelf2095["__typename"]
  | FragmentSelf2095["typenameHint"] | FragmentToken2093 | FragmentToken2094;
