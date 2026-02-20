import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1270 } from "./fragment1270";
import type { FragmentToken1271 } from "./fragment1271";

export const FRAGMENT_1272 = gql(`
  fragment Fragment1272 on Member151 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_151
    memberCount_151
    memberMetric_151
  }
`);

type FragmentResult1272 = ResultOf<typeof FRAGMENT_1272>;
type FragmentSelf1272 = NonNullable<FragmentResult1272>;

export type FragmentToken1272 =
  | FragmentSelf1272["__typename"]
  | FragmentSelf1272["typenameHint"] | FragmentToken1270 | FragmentToken1271;
