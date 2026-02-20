import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1547 } from "./fragment1547";
import type { FragmentToken1548 } from "./fragment1548";

export const FRAGMENT_1549 = gql(`
  fragment Fragment1549 on Member148 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_148
    memberCount_148
    memberMetric_148
  }
`);

type FragmentResult1549 = ResultOf<typeof FRAGMENT_1549>;
type FragmentSelf1549 = NonNullable<FragmentResult1549>;

export type FragmentToken1549 =
  | FragmentSelf1549["__typename"]
  | FragmentSelf1549["typenameHint"] | FragmentToken1547 | FragmentToken1548;
