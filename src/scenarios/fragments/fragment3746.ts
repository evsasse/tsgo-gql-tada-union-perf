import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3744 } from "./fragment3744";
import type { FragmentToken3745 } from "./fragment3745";

export const FRAGMENT_3746 = gql(`
  fragment Fragment3746 on Member105 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_105
    memberCount_105
    memberMetric_105
  }
`);

type FragmentResult3746 = ResultOf<typeof FRAGMENT_3746>;
type FragmentSelf3746 = NonNullable<FragmentResult3746>;

export type FragmentToken3746 =
  | FragmentSelf3746["__typename"]
  | FragmentSelf3746["typenameHint"] | FragmentToken3744 | FragmentToken3745;
