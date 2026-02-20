import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2340 } from "./fragment2340";
import type { FragmentToken2341 } from "./fragment2341";

export const FRAGMENT_2342 = gql(`
  fragment Fragment2342 on Member101 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_101
    memberCount_101
    memberMetric_101
  }
`);

type FragmentResult2342 = ResultOf<typeof FRAGMENT_2342>;
type FragmentSelf2342 = NonNullable<FragmentResult2342>;

export type FragmentToken2342 =
  | FragmentSelf2342["__typename"]
  | FragmentSelf2342["typenameHint"] | FragmentToken2340 | FragmentToken2341;
