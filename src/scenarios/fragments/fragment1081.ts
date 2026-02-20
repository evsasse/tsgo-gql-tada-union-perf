import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1079 } from "./fragment1079";
import type { FragmentToken1080 } from "./fragment1080";

export const FRAGMENT_1081 = gql(`
  fragment Fragment1081 on Member240 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_240
    memberCount_240
    memberMetric_240
  }
`);

type FragmentResult1081 = ResultOf<typeof FRAGMENT_1081>;
type FragmentSelf1081 = NonNullable<FragmentResult1081>;

export type FragmentToken1081 =
  | FragmentSelf1081["__typename"]
  | FragmentSelf1081["typenameHint"] | FragmentToken1079 | FragmentToken1080;
