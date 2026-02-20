import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1377 } from "./fragment1377";
import type { FragmentToken1378 } from "./fragment1378";

export const FRAGMENT_1379 = gql(`
  fragment Fragment1379 on Member258 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_258
    memberCount_258
    memberMetric_258
  }
`);

type FragmentResult1379 = ResultOf<typeof FRAGMENT_1379>;
type FragmentSelf1379 = NonNullable<FragmentResult1379>;

export type FragmentToken1379 =
  | FragmentSelf1379["__typename"]
  | FragmentSelf1379["typenameHint"] | FragmentToken1377 | FragmentToken1378;
