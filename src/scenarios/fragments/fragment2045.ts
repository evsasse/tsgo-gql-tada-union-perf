import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2043 } from "./fragment2043";
import type { FragmentToken2044 } from "./fragment2044";

export const FRAGMENT_2045 = gql(`
  fragment Fragment2045 on Member84 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_84
    memberCount_84
    memberMetric_84
  }
`);

type FragmentResult2045 = ResultOf<typeof FRAGMENT_2045>;
type FragmentSelf2045 = NonNullable<FragmentResult2045>;

export type FragmentToken2045 =
  | FragmentSelf2045["__typename"]
  | FragmentSelf2045["typenameHint"] | FragmentToken2043 | FragmentToken2044;
