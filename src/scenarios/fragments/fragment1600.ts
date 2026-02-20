import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1598 } from "./fragment1598";
import type { FragmentToken1599 } from "./fragment1599";

export const FRAGMENT_1600 = gql(`
  fragment Fragment1600 on Member199 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_199
    memberCount_199
    memberMetric_199
  }
`);

type FragmentResult1600 = ResultOf<typeof FRAGMENT_1600>;
type FragmentSelf1600 = NonNullable<FragmentResult1600>;

export type FragmentToken1600 =
  | FragmentSelf1600["__typename"]
  | FragmentSelf1600["typenameHint"] | FragmentToken1598 | FragmentToken1599;
