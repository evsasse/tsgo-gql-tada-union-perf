import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3772 } from "./fragment3772";
import type { FragmentToken3773 } from "./fragment3773";

export const FRAGMENT_3774 = gql(`
  fragment Fragment3774 on Member133 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_133
    memberCount_133
    memberMetric_133
  }
`);

type FragmentResult3774 = ResultOf<typeof FRAGMENT_3774>;
type FragmentSelf3774 = NonNullable<FragmentResult3774>;

export type FragmentToken3774 =
  | FragmentSelf3774["__typename"]
  | FragmentSelf3774["typenameHint"] | FragmentToken3772 | FragmentToken3773;
