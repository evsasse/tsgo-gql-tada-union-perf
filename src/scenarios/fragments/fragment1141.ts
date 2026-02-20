import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1139 } from "./fragment1139";
import type { FragmentToken1140 } from "./fragment1140";

export const FRAGMENT_1141 = gql(`
  fragment Fragment1141 on Member20 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_20
    memberCount_20
    memberMetric_20
  }
`);

type FragmentResult1141 = ResultOf<typeof FRAGMENT_1141>;
type FragmentSelf1141 = NonNullable<FragmentResult1141>;

export type FragmentToken1141 =
  | FragmentSelf1141["__typename"]
  | FragmentSelf1141["typenameHint"] | FragmentToken1139 | FragmentToken1140;
