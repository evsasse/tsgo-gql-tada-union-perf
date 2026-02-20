import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1695 } from "./fragment1695";
import type { FragmentToken1696 } from "./fragment1696";

export const FRAGMENT_1697 = gql(`
  fragment Fragment1697 on Member16 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_16
    memberCount_16
    memberMetric_16
  }
`);

type FragmentResult1697 = ResultOf<typeof FRAGMENT_1697>;
type FragmentSelf1697 = NonNullable<FragmentResult1697>;

export type FragmentToken1697 =
  | FragmentSelf1697["__typename"]
  | FragmentSelf1697["typenameHint"] | FragmentToken1695 | FragmentToken1696;
