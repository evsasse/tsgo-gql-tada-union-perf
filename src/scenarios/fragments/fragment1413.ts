import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1411 } from "./fragment1411";
import type { FragmentToken1412 } from "./fragment1412";

export const FRAGMENT_1413 = gql(`
  fragment Fragment1413 on Member12 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_12
    memberCount_12
    memberMetric_12
  }
`);

type FragmentResult1413 = ResultOf<typeof FRAGMENT_1413>;
type FragmentSelf1413 = NonNullable<FragmentResult1413>;

export type FragmentToken1413 =
  | FragmentSelf1413["__typename"]
  | FragmentSelf1413["typenameHint"] | FragmentToken1411 | FragmentToken1412;
