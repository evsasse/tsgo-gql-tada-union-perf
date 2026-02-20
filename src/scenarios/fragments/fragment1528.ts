import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1526 } from "./fragment1526";
import type { FragmentToken1527 } from "./fragment1527";

export const FRAGMENT_1528 = gql(`
  fragment Fragment1528 on Member127 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_127
    memberCount_127
    memberMetric_127
  }
`);

type FragmentResult1528 = ResultOf<typeof FRAGMENT_1528>;
type FragmentSelf1528 = NonNullable<FragmentResult1528>;

export type FragmentToken1528 =
  | FragmentSelf1528["__typename"]
  | FragmentSelf1528["typenameHint"] | FragmentToken1526 | FragmentToken1527;
