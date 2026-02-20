import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1549 } from "./fragment1549";
import type { FragmentToken1550 } from "./fragment1550";

export const FRAGMENT_1551 = gql(`
  fragment Fragment1551 on Member150 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_150
    memberCount_150
    memberMetric_150
  }
`);

type FragmentResult1551 = ResultOf<typeof FRAGMENT_1551>;
type FragmentSelf1551 = NonNullable<FragmentResult1551>;

export type FragmentToken1551 =
  | FragmentSelf1551["__typename"]
  | FragmentSelf1551["typenameHint"] | FragmentToken1549 | FragmentToken1550;
