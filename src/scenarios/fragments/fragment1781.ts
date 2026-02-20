import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1779 } from "./fragment1779";
import type { FragmentToken1780 } from "./fragment1780";

export const FRAGMENT_1781 = gql(`
  fragment Fragment1781 on Member100 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_100
    memberCount_100
    memberMetric_100
  }
`);

type FragmentResult1781 = ResultOf<typeof FRAGMENT_1781>;
type FragmentSelf1781 = NonNullable<FragmentResult1781>;

export type FragmentToken1781 =
  | FragmentSelf1781["__typename"]
  | FragmentSelf1781["typenameHint"] | FragmentToken1779 | FragmentToken1780;
