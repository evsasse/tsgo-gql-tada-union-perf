import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1291 } from "./fragment1291";
import type { FragmentToken1292 } from "./fragment1292";

export const FRAGMENT_1293 = gql(`
  fragment Fragment1293 on Member172 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_172
    memberCount_172
    memberMetric_172
  }
`);

type FragmentResult1293 = ResultOf<typeof FRAGMENT_1293>;
type FragmentSelf1293 = NonNullable<FragmentResult1293>;

export type FragmentToken1293 =
  | FragmentSelf1293["__typename"]
  | FragmentSelf1293["typenameHint"] | FragmentToken1291 | FragmentToken1292;
