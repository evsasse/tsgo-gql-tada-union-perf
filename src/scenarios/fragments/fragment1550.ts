import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1548 } from "./fragment1548";
import type { FragmentToken1549 } from "./fragment1549";

export const FRAGMENT_1550 = gql(`
  fragment Fragment1550 on Member149 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_149
    memberCount_149
    memberMetric_149
  }
`);

type FragmentResult1550 = ResultOf<typeof FRAGMENT_1550>;
type FragmentSelf1550 = NonNullable<FragmentResult1550>;

export type FragmentToken1550 =
  | FragmentSelf1550["__typename"]
  | FragmentSelf1550["typenameHint"] | FragmentToken1548 | FragmentToken1549;
