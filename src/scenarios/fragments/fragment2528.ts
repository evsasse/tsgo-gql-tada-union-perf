import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2526 } from "./fragment2526";
import type { FragmentToken2527 } from "./fragment2527";

export const FRAGMENT_2528 = gql(`
  fragment Fragment2528 on Member07 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_07
    memberCount_07
    memberMetric_07
  }
`);

type FragmentResult2528 = ResultOf<typeof FRAGMENT_2528>;
type FragmentSelf2528 = NonNullable<FragmentResult2528>;

export type FragmentToken2528 =
  | FragmentSelf2528["__typename"]
  | FragmentSelf2528["typenameHint"] | FragmentToken2526 | FragmentToken2527;
