import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1121 } from "./fragment1121";
import type { FragmentToken1122 } from "./fragment1122";

export const FRAGMENT_1123 = gql(`
  fragment Fragment1123 on Member02 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_02
    memberCount_02
    memberMetric_02
  }
`);

type FragmentResult1123 = ResultOf<typeof FRAGMENT_1123>;
type FragmentSelf1123 = NonNullable<FragmentResult1123>;

export type FragmentToken1123 =
  | FragmentSelf1123["__typename"]
  | FragmentSelf1123["typenameHint"] | FragmentToken1121 | FragmentToken1122;
