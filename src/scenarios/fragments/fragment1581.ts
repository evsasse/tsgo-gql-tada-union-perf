import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1579 } from "./fragment1579";
import type { FragmentToken1580 } from "./fragment1580";

export const FRAGMENT_1581 = gql(`
  fragment Fragment1581 on Member180 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_180
    memberCount_180
    memberMetric_180
  }
`);

type FragmentResult1581 = ResultOf<typeof FRAGMENT_1581>;
type FragmentSelf1581 = NonNullable<FragmentResult1581>;

export type FragmentToken1581 =
  | FragmentSelf1581["__typename"]
  | FragmentSelf1581["typenameHint"] | FragmentToken1579 | FragmentToken1580;
