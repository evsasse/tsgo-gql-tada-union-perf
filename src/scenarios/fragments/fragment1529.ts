import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1527 } from "./fragment1527";
import type { FragmentToken1528 } from "./fragment1528";

export const FRAGMENT_1529 = gql(`
  fragment Fragment1529 on Member128 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_128
    memberCount_128
    memberMetric_128
  }
`);

type FragmentResult1529 = ResultOf<typeof FRAGMENT_1529>;
type FragmentSelf1529 = NonNullable<FragmentResult1529>;

export type FragmentToken1529 =
  | FragmentSelf1529["__typename"]
  | FragmentSelf1529["typenameHint"] | FragmentToken1527 | FragmentToken1528;
