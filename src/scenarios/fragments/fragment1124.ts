import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1122 } from "./fragment1122";
import type { FragmentToken1123 } from "./fragment1123";

export const FRAGMENT_1124 = gql(`
  fragment Fragment1124 on Member03 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_03
    memberCount_03
    memberMetric_03
  }
`);

type FragmentResult1124 = ResultOf<typeof FRAGMENT_1124>;
type FragmentSelf1124 = NonNullable<FragmentResult1124>;

export type FragmentToken1124 =
  | FragmentSelf1124["__typename"]
  | FragmentSelf1124["typenameHint"] | FragmentToken1122 | FragmentToken1123;
