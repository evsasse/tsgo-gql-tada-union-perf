import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3795 } from "./fragment3795";
import type { FragmentToken3796 } from "./fragment3796";

export const FRAGMENT_3797 = gql(`
  fragment Fragment3797 on Member156 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_156
    memberCount_156
    memberMetric_156
  }
`);

type FragmentResult3797 = ResultOf<typeof FRAGMENT_3797>;
type FragmentSelf3797 = NonNullable<FragmentResult3797>;

export type FragmentToken3797 =
  | FragmentSelf3797["__typename"]
  | FragmentSelf3797["typenameHint"] | FragmentToken3795 | FragmentToken3796;
