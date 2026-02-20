import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2094 } from "./fragment2094";
import type { FragmentToken2095 } from "./fragment2095";

export const FRAGMENT_2096 = gql(`
  fragment Fragment2096 on Member135 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_135
    memberCount_135
    memberMetric_135
  }
`);

type FragmentResult2096 = ResultOf<typeof FRAGMENT_2096>;
type FragmentSelf2096 = NonNullable<FragmentResult2096>;

export type FragmentToken2096 =
  | FragmentSelf2096["__typename"]
  | FragmentSelf2096["typenameHint"] | FragmentToken2094 | FragmentToken2095;
