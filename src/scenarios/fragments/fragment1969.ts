import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1967 } from "./fragment1967";
import type { FragmentToken1968 } from "./fragment1968";

export const FRAGMENT_1969 = gql(`
  fragment Fragment1969 on Member08 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_08
    memberCount_08
    memberMetric_08
  }
`);

type FragmentResult1969 = ResultOf<typeof FRAGMENT_1969>;
type FragmentSelf1969 = NonNullable<FragmentResult1969>;

export type FragmentToken1969 =
  | FragmentSelf1969["__typename"]
  | FragmentSelf1969["typenameHint"] | FragmentToken1967 | FragmentToken1968;
