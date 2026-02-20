import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1566 } from "./fragment1566";
import type { FragmentToken1567 } from "./fragment1567";

export const FRAGMENT_1568 = gql(`
  fragment Fragment1568 on Member167 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_167
    memberCount_167
    memberMetric_167
  }
`);

type FragmentResult1568 = ResultOf<typeof FRAGMENT_1568>;
type FragmentSelf1568 = NonNullable<FragmentResult1568>;

export type FragmentToken1568 =
  | FragmentSelf1568["__typename"]
  | FragmentSelf1568["typenameHint"] | FragmentToken1566 | FragmentToken1567;
