import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3447 } from "./fragment3447";
import type { FragmentToken3448 } from "./fragment3448";

export const FRAGMENT_3449 = gql(`
  fragment Fragment3449 on Member88 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_88
    memberCount_88
    memberMetric_88
  }
`);

type FragmentResult3449 = ResultOf<typeof FRAGMENT_3449>;
type FragmentSelf3449 = NonNullable<FragmentResult3449>;

export type FragmentToken3449 =
  | FragmentSelf3449["__typename"]
  | FragmentSelf3449["typenameHint"] | FragmentToken3447 | FragmentToken3448;
