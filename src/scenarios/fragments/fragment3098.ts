import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3096 } from "./fragment3096";
import type { FragmentToken3097 } from "./fragment3097";

export const FRAGMENT_3098 = gql(`
  fragment Fragment3098 on Member17 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_17
    memberCount_17
    memberMetric_17
  }
`);

type FragmentResult3098 = ResultOf<typeof FRAGMENT_3098>;
type FragmentSelf3098 = NonNullable<FragmentResult3098>;

export type FragmentToken3098 =
  | FragmentSelf3098["__typename"]
  | FragmentSelf3098["typenameHint"] | FragmentToken3096 | FragmentToken3097;
