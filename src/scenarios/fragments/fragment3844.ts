import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3842 } from "./fragment3842";
import type { FragmentToken3843 } from "./fragment3843";

export const FRAGMENT_3844 = gql(`
  fragment Fragment3844 on Member203 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_203
    memberCount_203
    memberMetric_203
  }
`);

type FragmentResult3844 = ResultOf<typeof FRAGMENT_3844>;
type FragmentSelf3844 = NonNullable<FragmentResult3844>;

export type FragmentToken3844 =
  | FragmentSelf3844["__typename"]
  | FragmentSelf3844["typenameHint"] | FragmentToken3842 | FragmentToken3843;
