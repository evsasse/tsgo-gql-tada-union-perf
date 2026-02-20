import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3570 } from "./fragment3570";
import type { FragmentToken3571 } from "./fragment3571";

export const FRAGMENT_3572 = gql(`
  fragment Fragment3572 on Member211 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_211
    memberCount_211
    memberMetric_211
  }
`);

type FragmentResult3572 = ResultOf<typeof FRAGMENT_3572>;
type FragmentSelf3572 = NonNullable<FragmentResult3572>;

export type FragmentToken3572 =
  | FragmentSelf3572["__typename"]
  | FragmentSelf3572["typenameHint"] | FragmentToken3570 | FragmentToken3571;
