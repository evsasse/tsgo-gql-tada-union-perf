import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2614 } from "./fragment2614";
import type { FragmentToken2615 } from "./fragment2615";

export const FRAGMENT_2616 = gql(`
  fragment Fragment2616 on Member95 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_95
    memberCount_95
    memberMetric_95
  }
`);

type FragmentResult2616 = ResultOf<typeof FRAGMENT_2616>;
type FragmentSelf2616 = NonNullable<FragmentResult2616>;

export type FragmentToken2616 =
  | FragmentSelf2616["__typename"]
  | FragmentSelf2616["typenameHint"] | FragmentToken2614 | FragmentToken2615;
