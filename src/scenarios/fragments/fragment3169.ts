import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3167 } from "./fragment3167";
import type { FragmentToken3168 } from "./fragment3168";

export const FRAGMENT_3169 = gql(`
  fragment Fragment3169 on Member88 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_88
    memberCount_88
    memberMetric_88
  }
`);

type FragmentResult3169 = ResultOf<typeof FRAGMENT_3169>;
type FragmentSelf3169 = NonNullable<FragmentResult3169>;

export type FragmentToken3169 =
  | FragmentSelf3169["__typename"]
  | FragmentSelf3169["typenameHint"] | FragmentToken3167 | FragmentToken3168;
