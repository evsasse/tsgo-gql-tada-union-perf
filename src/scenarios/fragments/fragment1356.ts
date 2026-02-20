import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1354 } from "./fragment1354";
import type { FragmentToken1355 } from "./fragment1355";

export const FRAGMENT_1356 = gql(`
  fragment Fragment1356 on Member235 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_235
    memberCount_235
    memberMetric_235
  }
`);

type FragmentResult1356 = ResultOf<typeof FRAGMENT_1356>;
type FragmentSelf1356 = NonNullable<FragmentResult1356>;

export type FragmentToken1356 =
  | FragmentSelf1356["__typename"]
  | FragmentSelf1356["typenameHint"] | FragmentToken1354 | FragmentToken1355;
