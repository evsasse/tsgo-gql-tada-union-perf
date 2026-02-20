import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1379 } from "./fragment1379";
import type { FragmentToken1380 } from "./fragment1380";

export const FRAGMENT_1381 = gql(`
  fragment Fragment1381 on Member260 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_260
    memberCount_260
    memberMetric_260
  }
`);

type FragmentResult1381 = ResultOf<typeof FRAGMENT_1381>;
type FragmentSelf1381 = NonNullable<FragmentResult1381>;

export type FragmentToken1381 =
  | FragmentSelf1381["__typename"]
  | FragmentSelf1381["typenameHint"] | FragmentToken1379 | FragmentToken1380;
