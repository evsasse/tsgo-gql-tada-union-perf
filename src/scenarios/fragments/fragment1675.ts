import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1673 } from "./fragment1673";
import type { FragmentToken1674 } from "./fragment1674";

export const FRAGMENT_1675 = gql(`
  fragment Fragment1675 on Member274 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_274
    memberCount_274
    memberMetric_274
  }
`);

type FragmentResult1675 = ResultOf<typeof FRAGMENT_1675>;
type FragmentSelf1675 = NonNullable<FragmentResult1675>;

export type FragmentToken1675 =
  | FragmentSelf1675["__typename"]
  | FragmentSelf1675["typenameHint"] | FragmentToken1673 | FragmentToken1674;
