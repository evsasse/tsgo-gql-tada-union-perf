import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2662 } from "./fragment2662";
import type { FragmentToken2663 } from "./fragment2663";

export const FRAGMENT_2664 = gql(`
  fragment Fragment2664 on Member143 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_143
    memberCount_143
    memberMetric_143
  }
`);

type FragmentResult2664 = ResultOf<typeof FRAGMENT_2664>;
type FragmentSelf2664 = NonNullable<FragmentResult2664>;

export type FragmentToken2664 =
  | FragmentSelf2664["__typename"]
  | FragmentSelf2664["typenameHint"] | FragmentToken2662 | FragmentToken2663;
