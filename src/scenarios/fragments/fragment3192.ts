import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3190 } from "./fragment3190";
import type { FragmentToken3191 } from "./fragment3191";

export const FRAGMENT_3192 = gql(`
  fragment Fragment3192 on Member111 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_111
    memberCount_111
    memberMetric_111
  }
`);

type FragmentResult3192 = ResultOf<typeof FRAGMENT_3192>;
type FragmentSelf3192 = NonNullable<FragmentResult3192>;

export type FragmentToken3192 =
  | FragmentSelf3192["__typename"]
  | FragmentSelf3192["typenameHint"] | FragmentToken3190 | FragmentToken3191;
