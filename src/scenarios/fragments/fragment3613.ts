import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3611 } from "./fragment3611";
import type { FragmentToken3612 } from "./fragment3612";

export const FRAGMENT_3613 = gql(`
  fragment Fragment3613 on Member252 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_252
    memberCount_252
    memberMetric_252
  }
`);

type FragmentResult3613 = ResultOf<typeof FRAGMENT_3613>;
type FragmentSelf3613 = NonNullable<FragmentResult3613>;

export type FragmentToken3613 =
  | FragmentSelf3613["__typename"]
  | FragmentSelf3613["typenameHint"] | FragmentToken3611 | FragmentToken3612;
