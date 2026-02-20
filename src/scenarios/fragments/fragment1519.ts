import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1517 } from "./fragment1517";
import type { FragmentToken1518 } from "./fragment1518";

export const FRAGMENT_1519 = gql(`
  fragment Fragment1519 on Member118 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_118
    memberCount_118
    memberMetric_118
  }
`);

type FragmentResult1519 = ResultOf<typeof FRAGMENT_1519>;
type FragmentSelf1519 = NonNullable<FragmentResult1519>;

export type FragmentToken1519 =
  | FragmentSelf1519["__typename"]
  | FragmentSelf1519["typenameHint"] | FragmentToken1517 | FragmentToken1518;
