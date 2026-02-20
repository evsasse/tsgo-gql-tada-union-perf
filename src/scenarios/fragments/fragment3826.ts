import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3824 } from "./fragment3824";
import type { FragmentToken3825 } from "./fragment3825";

export const FRAGMENT_3826 = gql(`
  fragment Fragment3826 on Member185 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_185
    memberCount_185
    memberMetric_185
  }
`);

type FragmentResult3826 = ResultOf<typeof FRAGMENT_3826>;
type FragmentSelf3826 = NonNullable<FragmentResult3826>;

export type FragmentToken3826 =
  | FragmentSelf3826["__typename"]
  | FragmentSelf3826["typenameHint"] | FragmentToken3824 | FragmentToken3825;
