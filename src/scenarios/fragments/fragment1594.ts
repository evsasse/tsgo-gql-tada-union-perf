import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1592 } from "./fragment1592";
import type { FragmentToken1593 } from "./fragment1593";

export const FRAGMENT_1594 = gql(`
  fragment Fragment1594 on Member193 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_193
    memberCount_193
    memberMetric_193
  }
`);

type FragmentResult1594 = ResultOf<typeof FRAGMENT_1594>;
type FragmentSelf1594 = NonNullable<FragmentResult1594>;

export type FragmentToken1594 =
  | FragmentSelf1594["__typename"]
  | FragmentSelf1594["typenameHint"] | FragmentToken1592 | FragmentToken1593;
