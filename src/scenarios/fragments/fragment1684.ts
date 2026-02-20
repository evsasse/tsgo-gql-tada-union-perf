import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1682 } from "./fragment1682";
import type { FragmentToken1683 } from "./fragment1683";

export const FRAGMENT_1684 = gql(`
  fragment Fragment1684 on Member03 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_03
    memberCount_03
    memberMetric_03
  }
`);

type FragmentResult1684 = ResultOf<typeof FRAGMENT_1684>;
type FragmentSelf1684 = NonNullable<FragmentResult1684>;

export type FragmentToken1684 =
  | FragmentSelf1684["__typename"]
  | FragmentSelf1684["typenameHint"] | FragmentToken1682 | FragmentToken1683;
