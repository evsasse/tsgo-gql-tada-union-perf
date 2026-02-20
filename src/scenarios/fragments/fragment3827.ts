import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3825 } from "./fragment3825";
import type { FragmentToken3826 } from "./fragment3826";

export const FRAGMENT_3827 = gql(`
  fragment Fragment3827 on Member186 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_186
    memberCount_186
    memberMetric_186
  }
`);

type FragmentResult3827 = ResultOf<typeof FRAGMENT_3827>;
type FragmentSelf3827 = NonNullable<FragmentResult3827>;

export type FragmentToken3827 =
  | FragmentSelf3827["__typename"]
  | FragmentSelf3827["typenameHint"] | FragmentToken3825 | FragmentToken3826;
