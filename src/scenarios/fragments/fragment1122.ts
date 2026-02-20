import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1120 } from "./fragment1120";
import type { FragmentToken1121 } from "./fragment1121";

export const FRAGMENT_1122 = gql(`
  fragment Fragment1122 on Member01 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_01
    memberCount_01
    memberMetric_01
  }
`);

type FragmentResult1122 = ResultOf<typeof FRAGMENT_1122>;
type FragmentSelf1122 = NonNullable<FragmentResult1122>;

export type FragmentToken1122 =
  | FragmentSelf1122["__typename"]
  | FragmentSelf1122["typenameHint"] | FragmentToken1120 | FragmentToken1121;
