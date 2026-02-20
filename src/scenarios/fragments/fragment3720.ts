import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3718 } from "./fragment3718";
import type { FragmentToken3719 } from "./fragment3719";

export const FRAGMENT_3720 = gql(`
  fragment Fragment3720 on Member79 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_79
    memberCount_79
    memberMetric_79
  }
`);

type FragmentResult3720 = ResultOf<typeof FRAGMENT_3720>;
type FragmentSelf3720 = NonNullable<FragmentResult3720>;

export type FragmentToken3720 =
  | FragmentSelf3720["__typename"]
  | FragmentSelf3720["typenameHint"] | FragmentToken3718 | FragmentToken3719;
