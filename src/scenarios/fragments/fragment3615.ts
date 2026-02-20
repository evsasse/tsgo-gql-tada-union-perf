import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3613 } from "./fragment3613";
import type { FragmentToken3614 } from "./fragment3614";

export const FRAGMENT_3615 = gql(`
  fragment Fragment3615 on Member254 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_254
    memberCount_254
    memberMetric_254
  }
`);

type FragmentResult3615 = ResultOf<typeof FRAGMENT_3615>;
type FragmentSelf3615 = NonNullable<FragmentResult3615>;

export type FragmentToken3615 =
  | FragmentSelf3615["__typename"]
  | FragmentSelf3615["typenameHint"] | FragmentToken3613 | FragmentToken3614;
