import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2732 } from "./fragment2732";
import type { FragmentToken2733 } from "./fragment2733";

export const FRAGMENT_2734 = gql(`
  fragment Fragment2734 on Member213 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_213
    memberCount_213
    memberMetric_213
  }
`);

type FragmentResult2734 = ResultOf<typeof FRAGMENT_2734>;
type FragmentSelf2734 = NonNullable<FragmentResult2734>;

export type FragmentToken2734 =
  | FragmentSelf2734["__typename"]
  | FragmentSelf2734["typenameHint"] | FragmentToken2732 | FragmentToken2733;
