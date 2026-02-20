import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3717 } from "./fragment3717";
import type { FragmentToken3718 } from "./fragment3718";

export const FRAGMENT_3719 = gql(`
  fragment Fragment3719 on Member78 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_78
    memberCount_78
    memberMetric_78
  }
`);

type FragmentResult3719 = ResultOf<typeof FRAGMENT_3719>;
type FragmentSelf3719 = NonNullable<FragmentResult3719>;

export type FragmentToken3719 =
  | FragmentSelf3719["__typename"]
  | FragmentSelf3719["typenameHint"] | FragmentToken3717 | FragmentToken3718;
