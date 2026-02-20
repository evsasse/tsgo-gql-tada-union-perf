import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2579 } from "./fragment2579";
import type { FragmentToken2580 } from "./fragment2580";

export const FRAGMENT_2581 = gql(`
  fragment Fragment2581 on Member60 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_60
    memberCount_60
    memberMetric_60
  }
`);

type FragmentResult2581 = ResultOf<typeof FRAGMENT_2581>;
type FragmentSelf2581 = NonNullable<FragmentResult2581>;

export type FragmentToken2581 =
  | FragmentSelf2581["__typename"]
  | FragmentSelf2581["typenameHint"] | FragmentToken2579 | FragmentToken2580;
