import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3791 } from "./fragment3791";
import type { FragmentToken3792 } from "./fragment3792";

export const FRAGMENT_3793 = gql(`
  fragment Fragment3793 on Member152 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_152
    memberCount_152
    memberMetric_152
  }
`);

type FragmentResult3793 = ResultOf<typeof FRAGMENT_3793>;
type FragmentSelf3793 = NonNullable<FragmentResult3793>;

export type FragmentToken3793 =
  | FragmentSelf3793["__typename"]
  | FragmentSelf3793["typenameHint"] | FragmentToken3791 | FragmentToken3792;
