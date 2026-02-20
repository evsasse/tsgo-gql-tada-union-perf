import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3787 } from "./fragment3787";
import type { FragmentToken3788 } from "./fragment3788";

export const FRAGMENT_3789 = gql(`
  fragment Fragment3789 on Member148 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_148
    memberCount_148
    memberMetric_148
  }
`);

type FragmentResult3789 = ResultOf<typeof FRAGMENT_3789>;
type FragmentSelf3789 = NonNullable<FragmentResult3789>;

export type FragmentToken3789 =
  | FragmentSelf3789["__typename"]
  | FragmentSelf3789["typenameHint"] | FragmentToken3787 | FragmentToken3788;
