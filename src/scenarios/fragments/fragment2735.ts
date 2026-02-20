import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2733 } from "./fragment2733";
import type { FragmentToken2734 } from "./fragment2734";

export const FRAGMENT_2735 = gql(`
  fragment Fragment2735 on Member214 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_214
    memberCount_214
    memberMetric_214
  }
`);

type FragmentResult2735 = ResultOf<typeof FRAGMENT_2735>;
type FragmentSelf2735 = NonNullable<FragmentResult2735>;

export type FragmentToken2735 =
  | FragmentSelf2735["__typename"]
  | FragmentSelf2735["typenameHint"] | FragmentToken2733 | FragmentToken2734;
