import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1381 } from "./fragment1381";
import type { FragmentToken1382 } from "./fragment1382";

export const FRAGMENT_1383 = gql(`
  fragment Fragment1383 on Member262 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_262
    memberCount_262
    memberMetric_262
  }
`);

type FragmentResult1383 = ResultOf<typeof FRAGMENT_1383>;
type FragmentSelf1383 = NonNullable<FragmentResult1383>;

export type FragmentToken1383 =
  | FragmentSelf1383["__typename"]
  | FragmentSelf1383["typenameHint"] | FragmentToken1381 | FragmentToken1382;
