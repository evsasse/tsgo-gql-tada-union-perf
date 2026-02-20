import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1110 } from "./fragment1110";
import type { FragmentToken1111 } from "./fragment1111";

export const FRAGMENT_1112 = gql(`
  fragment Fragment1112 on Member271 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_271
    memberCount_271
    memberMetric_271
  }
`);

type FragmentResult1112 = ResultOf<typeof FRAGMENT_1112>;
type FragmentSelf1112 = NonNullable<FragmentResult1112>;

export type FragmentToken1112 =
  | FragmentSelf1112["__typename"]
  | FragmentSelf1112["typenameHint"] | FragmentToken1110 | FragmentToken1111;
