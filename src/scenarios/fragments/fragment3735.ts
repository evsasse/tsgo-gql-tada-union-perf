import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3733 } from "./fragment3733";
import type { FragmentToken3734 } from "./fragment3734";

export const FRAGMENT_3735 = gql(`
  fragment Fragment3735 on Member94 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_94
    memberCount_94
    memberMetric_94
  }
`);

type FragmentResult3735 = ResultOf<typeof FRAGMENT_3735>;
type FragmentSelf3735 = NonNullable<FragmentResult3735>;

export type FragmentToken3735 =
  | FragmentSelf3735["__typename"]
  | FragmentSelf3735["typenameHint"] | FragmentToken3733 | FragmentToken3734;
