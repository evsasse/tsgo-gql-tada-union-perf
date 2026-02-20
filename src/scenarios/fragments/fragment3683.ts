import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3681 } from "./fragment3681";
import type { FragmentToken3682 } from "./fragment3682";

export const FRAGMENT_3683 = gql(`
  fragment Fragment3683 on Member42 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_42
    memberCount_42
    memberMetric_42
  }
`);

type FragmentResult3683 = ResultOf<typeof FRAGMENT_3683>;
type FragmentSelf3683 = NonNullable<FragmentResult3683>;

export type FragmentToken3683 =
  | FragmentSelf3683["__typename"]
  | FragmentSelf3683["typenameHint"] | FragmentToken3681 | FragmentToken3682;
