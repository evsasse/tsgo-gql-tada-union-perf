import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2964 } from "./fragment2964";
import type { FragmentToken2965 } from "./fragment2965";

export const FRAGMENT_2966 = gql(`
  fragment Fragment2966 on Member165 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_165
    memberCount_165
    memberMetric_165
  }
`);

type FragmentResult2966 = ResultOf<typeof FRAGMENT_2966>;
type FragmentSelf2966 = NonNullable<FragmentResult2966>;

export type FragmentToken2966 =
  | FragmentSelf2966["__typename"]
  | FragmentSelf2966["typenameHint"] | FragmentToken2964 | FragmentToken2965;
