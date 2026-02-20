import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3341 } from "./fragment3341";
import type { FragmentToken3342 } from "./fragment3342";

export const FRAGMENT_3343 = gql(`
  fragment Fragment3343 on Member262 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_262
    memberCount_262
    memberMetric_262
  }
`);

type FragmentResult3343 = ResultOf<typeof FRAGMENT_3343>;
type FragmentSelf3343 = NonNullable<FragmentResult3343>;

export type FragmentToken3343 =
  | FragmentSelf3343["__typename"]
  | FragmentSelf3343["typenameHint"] | FragmentToken3341 | FragmentToken3342;
