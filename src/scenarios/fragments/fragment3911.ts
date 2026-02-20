import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3909 } from "./fragment3909";
import type { FragmentToken3910 } from "./fragment3910";

export const FRAGMENT_3911 = gql(`
  fragment Fragment3911 on Member270 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_270
    memberCount_270
    memberMetric_270
  }
`);

type FragmentResult3911 = ResultOf<typeof FRAGMENT_3911>;
type FragmentSelf3911 = NonNullable<FragmentResult3911>;

export type FragmentToken3911 =
  | FragmentSelf3911["__typename"]
  | FragmentSelf3911["typenameHint"] | FragmentToken3909 | FragmentToken3910;
