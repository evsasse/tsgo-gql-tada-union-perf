import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3579 } from "./fragment3579";
import type { FragmentToken3580 } from "./fragment3580";

export const FRAGMENT_3581 = gql(`
  fragment Fragment3581 on Member220 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_220
    memberCount_220
    memberMetric_220
  }
`);

type FragmentResult3581 = ResultOf<typeof FRAGMENT_3581>;
type FragmentSelf3581 = NonNullable<FragmentResult3581>;

export type FragmentToken3581 =
  | FragmentSelf3581["__typename"]
  | FragmentSelf3581["typenameHint"] | FragmentToken3579 | FragmentToken3580;
