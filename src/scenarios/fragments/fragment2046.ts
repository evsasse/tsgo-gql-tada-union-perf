import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2044 } from "./fragment2044";
import type { FragmentToken2045 } from "./fragment2045";

export const FRAGMENT_2046 = gql(`
  fragment Fragment2046 on Member85 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_85
    memberCount_85
    memberMetric_85
  }
`);

type FragmentResult2046 = ResultOf<typeof FRAGMENT_2046>;
type FragmentSelf2046 = NonNullable<FragmentResult2046>;

export type FragmentToken2046 =
  | FragmentSelf2046["__typename"]
  | FragmentSelf2046["typenameHint"] | FragmentToken2044 | FragmentToken2045;
