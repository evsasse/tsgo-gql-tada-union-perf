import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3367 } from "./fragment3367";
import type { FragmentToken3368 } from "./fragment3368";

export const FRAGMENT_3369 = gql(`
  fragment Fragment3369 on Member08 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_08
    memberCount_08
    memberMetric_08
  }
`);

type FragmentResult3369 = ResultOf<typeof FRAGMENT_3369>;
type FragmentSelf3369 = NonNullable<FragmentResult3369>;

export type FragmentToken3369 =
  | FragmentSelf3369["__typename"]
  | FragmentSelf3369["typenameHint"] | FragmentToken3367 | FragmentToken3368;
