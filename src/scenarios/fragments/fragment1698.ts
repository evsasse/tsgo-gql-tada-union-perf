import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1696 } from "./fragment1696";
import type { FragmentToken1697 } from "./fragment1697";

export const FRAGMENT_1698 = gql(`
  fragment Fragment1698 on Member17 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_17
    memberCount_17
    memberMetric_17
  }
`);

type FragmentResult1698 = ResultOf<typeof FRAGMENT_1698>;
type FragmentSelf1698 = NonNullable<FragmentResult1698>;

export type FragmentToken1698 =
  | FragmentSelf1698["__typename"]
  | FragmentSelf1698["typenameHint"] | FragmentToken1696 | FragmentToken1697;
