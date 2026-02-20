import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3680 } from "./fragment3680";
import type { FragmentToken3681 } from "./fragment3681";

export const FRAGMENT_3682 = gql(`
  fragment Fragment3682 on Member41 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_41
    memberCount_41
    memberMetric_41
  }
`);

type FragmentResult3682 = ResultOf<typeof FRAGMENT_3682>;
type FragmentSelf3682 = NonNullable<FragmentResult3682>;

export type FragmentToken3682 =
  | FragmentSelf3682["__typename"]
  | FragmentSelf3682["typenameHint"] | FragmentToken3680 | FragmentToken3681;
