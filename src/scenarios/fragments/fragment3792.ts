import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3790 } from "./fragment3790";
import type { FragmentToken3791 } from "./fragment3791";

export const FRAGMENT_3792 = gql(`
  fragment Fragment3792 on Member151 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_151
    memberCount_151
    memberMetric_151
  }
`);

type FragmentResult3792 = ResultOf<typeof FRAGMENT_3792>;
type FragmentSelf3792 = NonNullable<FragmentResult3792>;

export type FragmentToken3792 =
  | FragmentSelf3792["__typename"]
  | FragmentSelf3792["typenameHint"] | FragmentToken3790 | FragmentToken3791;
