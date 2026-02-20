import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2049 } from "./fragment2049";
import type { FragmentToken2050 } from "./fragment2050";

export const FRAGMENT_2051 = gql(`
  fragment Fragment2051 on Member90 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_90
    memberCount_90
    memberMetric_90
  }
`);

type FragmentResult2051 = ResultOf<typeof FRAGMENT_2051>;
type FragmentSelf2051 = NonNullable<FragmentResult2051>;

export type FragmentToken2051 =
  | FragmentSelf2051["__typename"]
  | FragmentSelf2051["typenameHint"] | FragmentToken2049 | FragmentToken2050;
