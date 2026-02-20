import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1367 } from "./fragment1367";
import type { FragmentToken1368 } from "./fragment1368";

export const FRAGMENT_1369 = gql(`
  fragment Fragment1369 on Member248 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_248
    memberCount_248
    memberMetric_248
  }
`);

type FragmentResult1369 = ResultOf<typeof FRAGMENT_1369>;
type FragmentSelf1369 = NonNullable<FragmentResult1369>;

export type FragmentToken1369 =
  | FragmentSelf1369["__typename"]
  | FragmentSelf1369["typenameHint"] | FragmentToken1367 | FragmentToken1368;
