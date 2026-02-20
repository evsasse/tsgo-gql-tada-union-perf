import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3260 } from "./fragment3260";
import type { FragmentToken3261 } from "./fragment3261";

export const FRAGMENT_3262 = gql(`
  fragment Fragment3262 on Member181 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_181
    memberCount_181
    memberMetric_181
  }
`);

type FragmentResult3262 = ResultOf<typeof FRAGMENT_3262>;
type FragmentSelf3262 = NonNullable<FragmentResult3262>;

export type FragmentToken3262 =
  | FragmentSelf3262["__typename"]
  | FragmentSelf3262["typenameHint"] | FragmentToken3260 | FragmentToken3261;
