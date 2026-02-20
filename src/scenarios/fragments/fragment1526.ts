import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1524 } from "./fragment1524";
import type { FragmentToken1525 } from "./fragment1525";

export const FRAGMENT_1526 = gql(`
  fragment Fragment1526 on Member125 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_125
    memberCount_125
    memberMetric_125
  }
`);

type FragmentResult1526 = ResultOf<typeof FRAGMENT_1526>;
type FragmentSelf1526 = NonNullable<FragmentResult1526>;

export type FragmentToken1526 =
  | FragmentSelf1526["__typename"]
  | FragmentSelf1526["typenameHint"] | FragmentToken1524 | FragmentToken1525;
