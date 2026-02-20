import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3336 } from "./fragment3336";
import type { FragmentToken3337 } from "./fragment3337";

export const FRAGMENT_3338 = gql(`
  fragment Fragment3338 on Member257 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_257
    memberCount_257
    memberMetric_257
  }
`);

type FragmentResult3338 = ResultOf<typeof FRAGMENT_3338>;
type FragmentSelf3338 = NonNullable<FragmentResult3338>;

export type FragmentToken3338 =
  | FragmentSelf3338["__typename"]
  | FragmentSelf3338["typenameHint"] | FragmentToken3336 | FragmentToken3337;
