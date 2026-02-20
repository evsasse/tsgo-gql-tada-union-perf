import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3094 } from "./fragment3094";
import type { FragmentToken3095 } from "./fragment3095";

export const FRAGMENT_3096 = gql(`
  fragment Fragment3096 on Member15 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_15
    memberCount_15
    memberMetric_15
  }
`);

type FragmentResult3096 = ResultOf<typeof FRAGMENT_3096>;
type FragmentSelf3096 = NonNullable<FragmentResult3096>;

export type FragmentToken3096 =
  | FragmentSelf3096["__typename"]
  | FragmentSelf3096["typenameHint"] | FragmentToken3094 | FragmentToken3095;
