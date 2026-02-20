import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2970 } from "./fragment2970";
import type { FragmentToken2971 } from "./fragment2971";

export const FRAGMENT_2972 = gql(`
  fragment Fragment2972 on Member171 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_171
    memberCount_171
    memberMetric_171
  }
`);

type FragmentResult2972 = ResultOf<typeof FRAGMENT_2972>;
type FragmentSelf2972 = NonNullable<FragmentResult2972>;

export type FragmentToken2972 =
  | FragmentSelf2972["__typename"]
  | FragmentSelf2972["typenameHint"] | FragmentToken2970 | FragmentToken2971;
