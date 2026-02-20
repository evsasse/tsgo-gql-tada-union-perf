import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1733 } from "./fragment1733";
import type { FragmentToken1734 } from "./fragment1734";

export const FRAGMENT_1735 = gql(`
  fragment Fragment1735 on Member54 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_54
    memberCount_54
    memberMetric_54
  }
`);

type FragmentResult1735 = ResultOf<typeof FRAGMENT_1735>;
type FragmentSelf1735 = NonNullable<FragmentResult1735>;

export type FragmentToken1735 =
  | FragmentSelf1735["__typename"]
  | FragmentSelf1735["typenameHint"] | FragmentToken1733 | FragmentToken1734;
