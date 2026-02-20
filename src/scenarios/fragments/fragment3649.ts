import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3647 } from "./fragment3647";
import type { FragmentToken3648 } from "./fragment3648";

export const FRAGMENT_3649 = gql(`
  fragment Fragment3649 on Member08 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_08
    memberCount_08
    memberMetric_08
  }
`);

type FragmentResult3649 = ResultOf<typeof FRAGMENT_3649>;
type FragmentSelf3649 = NonNullable<FragmentResult3649>;

export type FragmentToken3649 =
  | FragmentSelf3649["__typename"]
  | FragmentSelf3649["typenameHint"] | FragmentToken3647 | FragmentToken3648;
