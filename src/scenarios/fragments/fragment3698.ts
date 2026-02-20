import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3696 } from "./fragment3696";
import type { FragmentToken3697 } from "./fragment3697";

export const FRAGMENT_3698 = gql(`
  fragment Fragment3698 on Member57 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_57
    memberCount_57
    memberMetric_57
  }
`);

type FragmentResult3698 = ResultOf<typeof FRAGMENT_3698>;
type FragmentSelf3698 = NonNullable<FragmentResult3698>;

export type FragmentToken3698 =
  | FragmentSelf3698["__typename"]
  | FragmentSelf3698["typenameHint"] | FragmentToken3696 | FragmentToken3697;
