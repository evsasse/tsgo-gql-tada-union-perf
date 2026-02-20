import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3656 } from "./fragment3656";
import type { FragmentToken3657 } from "./fragment3657";

export const FRAGMENT_3658 = gql(`
  fragment Fragment3658 on Member17 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_17
    memberCount_17
    memberMetric_17
  }
`);

type FragmentResult3658 = ResultOf<typeof FRAGMENT_3658>;
type FragmentSelf3658 = NonNullable<FragmentResult3658>;

export type FragmentToken3658 =
  | FragmentSelf3658["__typename"]
  | FragmentSelf3658["typenameHint"] | FragmentToken3656 | FragmentToken3657;
