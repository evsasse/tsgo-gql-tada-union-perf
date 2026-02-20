import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1694 } from "./fragment1694";
import type { FragmentToken1695 } from "./fragment1695";

export const FRAGMENT_1696 = gql(`
  fragment Fragment1696 on Member15 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_15
    memberCount_15
    memberMetric_15
  }
`);

type FragmentResult1696 = ResultOf<typeof FRAGMENT_1696>;
type FragmentSelf1696 = NonNullable<FragmentResult1696>;

export type FragmentToken1696 =
  | FragmentSelf1696["__typename"]
  | FragmentSelf1696["typenameHint"] | FragmentToken1694 | FragmentToken1695;
