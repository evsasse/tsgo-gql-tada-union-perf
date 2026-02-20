import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1277 } from "./fragment1277";
import type { FragmentToken1278 } from "./fragment1278";

export const FRAGMENT_1279 = gql(`
  fragment Fragment1279 on Member158 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_158
    memberCount_158
    memberMetric_158
  }
`);

type FragmentResult1279 = ResultOf<typeof FRAGMENT_1279>;
type FragmentSelf1279 = NonNullable<FragmentResult1279>;

export type FragmentToken1279 =
  | FragmentSelf1279["__typename"]
  | FragmentSelf1279["typenameHint"] | FragmentToken1277 | FragmentToken1278;
