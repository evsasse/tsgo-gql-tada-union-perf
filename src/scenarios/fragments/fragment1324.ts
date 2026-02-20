import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1322 } from "./fragment1322";
import type { FragmentToken1323 } from "./fragment1323";

export const FRAGMENT_1324 = gql(`
  fragment Fragment1324 on Member203 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_203
    memberCount_203
    memberMetric_203
  }
`);

type FragmentResult1324 = ResultOf<typeof FRAGMENT_1324>;
type FragmentSelf1324 = NonNullable<FragmentResult1324>;

export type FragmentToken1324 =
  | FragmentSelf1324["__typename"]
  | FragmentSelf1324["typenameHint"] | FragmentToken1322 | FragmentToken1323;
