import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2518 } from "./fragment2518";
import type { FragmentToken2519 } from "./fragment2519";

export const FRAGMENT_2520 = gql(`
  fragment Fragment2520 on Member279 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_279
    memberCount_279
    memberMetric_279
  }
`);

type FragmentResult2520 = ResultOf<typeof FRAGMENT_2520>;
type FragmentSelf2520 = NonNullable<FragmentResult2520>;

export type FragmentToken2520 =
  | FragmentSelf2520["__typename"]
  | FragmentSelf2520["typenameHint"] | FragmentToken2518 | FragmentToken2519;
