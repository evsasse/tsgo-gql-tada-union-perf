import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3292 } from "./fragment3292";
import type { FragmentToken3293 } from "./fragment3293";

export const FRAGMENT_3294 = gql(`
  fragment Fragment3294 on Member213 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_213
    memberCount_213
    memberMetric_213
  }
`);

type FragmentResult3294 = ResultOf<typeof FRAGMENT_3294>;
type FragmentSelf3294 = NonNullable<FragmentResult3294>;

export type FragmentToken3294 =
  | FragmentSelf3294["__typename"]
  | FragmentSelf3294["typenameHint"] | FragmentToken3292 | FragmentToken3293;
