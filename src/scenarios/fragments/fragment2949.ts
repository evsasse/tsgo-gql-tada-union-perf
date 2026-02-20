import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2947 } from "./fragment2947";
import type { FragmentToken2948 } from "./fragment2948";

export const FRAGMENT_2949 = gql(`
  fragment Fragment2949 on Member148 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_148
    memberCount_148
    memberMetric_148
  }
`);

type FragmentResult2949 = ResultOf<typeof FRAGMENT_2949>;
type FragmentSelf2949 = NonNullable<FragmentResult2949>;

export type FragmentToken2949 =
  | FragmentSelf2949["__typename"]
  | FragmentSelf2949["typenameHint"] | FragmentToken2947 | FragmentToken2948;
