import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3517 } from "./fragment3517";
import type { FragmentToken3518 } from "./fragment3518";

export const FRAGMENT_3519 = gql(`
  fragment Fragment3519 on Member158 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_158
    memberCount_158
    memberMetric_158
  }
`);

type FragmentResult3519 = ResultOf<typeof FRAGMENT_3519>;
type FragmentSelf3519 = NonNullable<FragmentResult3519>;

export type FragmentToken3519 =
  | FragmentSelf3519["__typename"]
  | FragmentSelf3519["typenameHint"] | FragmentToken3517 | FragmentToken3518;
