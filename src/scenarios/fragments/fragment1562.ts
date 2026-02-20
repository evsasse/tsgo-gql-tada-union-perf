import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1560 } from "./fragment1560";
import type { FragmentToken1561 } from "./fragment1561";

export const FRAGMENT_1562 = gql(`
  fragment Fragment1562 on Member161 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_161
    memberCount_161
    memberMetric_161
  }
`);

type FragmentResult1562 = ResultOf<typeof FRAGMENT_1562>;
type FragmentSelf1562 = NonNullable<FragmentResult1562>;

export type FragmentToken1562 =
  | FragmentSelf1562["__typename"]
  | FragmentSelf1562["typenameHint"] | FragmentToken1560 | FragmentToken1561;
