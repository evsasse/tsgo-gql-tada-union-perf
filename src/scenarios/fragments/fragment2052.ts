import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2050 } from "./fragment2050";
import type { FragmentToken2051 } from "./fragment2051";

export const FRAGMENT_2052 = gql(`
  fragment Fragment2052 on Member91 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_91
    memberCount_91
    memberMetric_91
  }
`);

type FragmentResult2052 = ResultOf<typeof FRAGMENT_2052>;
type FragmentSelf2052 = NonNullable<FragmentResult2052>;

export type FragmentToken2052 =
  | FragmentSelf2052["__typename"]
  | FragmentSelf2052["typenameHint"] | FragmentToken2050 | FragmentToken2051;
