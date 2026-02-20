import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1323 } from "./fragment1323";
import type { FragmentToken1324 } from "./fragment1324";

export const FRAGMENT_1325 = gql(`
  fragment Fragment1325 on Member204 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_204
    memberCount_204
    memberMetric_204
  }
`);

type FragmentResult1325 = ResultOf<typeof FRAGMENT_1325>;
type FragmentSelf1325 = NonNullable<FragmentResult1325>;

export type FragmentToken1325 =
  | FragmentSelf1325["__typename"]
  | FragmentSelf1325["typenameHint"] | FragmentToken1323 | FragmentToken1324;
