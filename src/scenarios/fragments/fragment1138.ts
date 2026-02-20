import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1136 } from "./fragment1136";
import type { FragmentToken1137 } from "./fragment1137";

export const FRAGMENT_1138 = gql(`
  fragment Fragment1138 on Member17 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_17
    memberCount_17
    memberMetric_17
  }
`);

type FragmentResult1138 = ResultOf<typeof FRAGMENT_1138>;
type FragmentSelf1138 = NonNullable<FragmentResult1138>;

export type FragmentToken1138 =
  | FragmentSelf1138["__typename"]
  | FragmentSelf1138["typenameHint"] | FragmentToken1136 | FragmentToken1137;
