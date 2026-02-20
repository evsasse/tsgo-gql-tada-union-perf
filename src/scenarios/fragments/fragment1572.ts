import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1570 } from "./fragment1570";
import type { FragmentToken1571 } from "./fragment1571";

export const FRAGMENT_1572 = gql(`
  fragment Fragment1572 on Member171 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_171
    memberCount_171
    memberMetric_171
  }
`);

type FragmentResult1572 = ResultOf<typeof FRAGMENT_1572>;
type FragmentSelf1572 = NonNullable<FragmentResult1572>;

export type FragmentToken1572 =
  | FragmentSelf1572["__typename"]
  | FragmentSelf1572["typenameHint"] | FragmentToken1570 | FragmentToken1571;
