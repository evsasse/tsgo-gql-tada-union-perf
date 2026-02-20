import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1680 } from "./fragment1680";
import type { FragmentToken1681 } from "./fragment1681";

export const FRAGMENT_1682 = gql(`
  fragment Fragment1682 on Member01 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_01
    memberCount_01
    memberMetric_01
  }
`);

type FragmentResult1682 = ResultOf<typeof FRAGMENT_1682>;
type FragmentSelf1682 = NonNullable<FragmentResult1682>;

export type FragmentToken1682 =
  | FragmentSelf1682["__typename"]
  | FragmentSelf1682["typenameHint"] | FragmentToken1680 | FragmentToken1681;
