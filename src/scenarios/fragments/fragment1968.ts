import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1966 } from "./fragment1966";
import type { FragmentToken1967 } from "./fragment1967";

export const FRAGMENT_1968 = gql(`
  fragment Fragment1968 on Member07 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_07
    memberCount_07
    memberMetric_07
  }
`);

type FragmentResult1968 = ResultOf<typeof FRAGMENT_1968>;
type FragmentSelf1968 = NonNullable<FragmentResult1968>;

export type FragmentToken1968 =
  | FragmentSelf1968["__typename"]
  | FragmentSelf1968["typenameHint"] | FragmentToken1966 | FragmentToken1967;
