import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1732 } from "./fragment1732";
import type { FragmentToken1733 } from "./fragment1733";

export const FRAGMENT_1734 = gql(`
  fragment Fragment1734 on Member53 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_53
    memberCount_53
    memberMetric_53
  }
`);

type FragmentResult1734 = ResultOf<typeof FRAGMENT_1734>;
type FragmentSelf1734 = NonNullable<FragmentResult1734>;

export type FragmentToken1734 =
  | FragmentSelf1734["__typename"]
  | FragmentSelf1734["typenameHint"] | FragmentToken1732 | FragmentToken1733;
