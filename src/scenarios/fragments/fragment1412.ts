import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1410 } from "./fragment1410";
import type { FragmentToken1411 } from "./fragment1411";

export const FRAGMENT_1412 = gql(`
  fragment Fragment1412 on Member11 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_11
    memberCount_11
    memberMetric_11
  }
`);

type FragmentResult1412 = ResultOf<typeof FRAGMENT_1412>;
type FragmentSelf1412 = NonNullable<FragmentResult1412>;

export type FragmentToken1412 =
  | FragmentSelf1412["__typename"]
  | FragmentSelf1412["typenameHint"] | FragmentToken1410 | FragmentToken1411;
