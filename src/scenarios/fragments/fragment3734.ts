import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3732 } from "./fragment3732";
import type { FragmentToken3733 } from "./fragment3733";

export const FRAGMENT_3734 = gql(`
  fragment Fragment3734 on Member93 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_93
    memberCount_93
    memberMetric_93
  }
`);

type FragmentResult3734 = ResultOf<typeof FRAGMENT_3734>;
type FragmentSelf3734 = NonNullable<FragmentResult3734>;

export type FragmentToken3734 =
  | FragmentSelf3734["__typename"]
  | FragmentSelf3734["typenameHint"] | FragmentToken3732 | FragmentToken3733;
