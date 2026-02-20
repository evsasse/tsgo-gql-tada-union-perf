import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3012 } from "./fragment3012";
import type { FragmentToken3013 } from "./fragment3013";

export const FRAGMENT_3014 = gql(`
  fragment Fragment3014 on Member213 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_213
    memberCount_213
    memberMetric_213
  }
`);

type FragmentResult3014 = ResultOf<typeof FRAGMENT_3014>;
type FragmentSelf3014 = NonNullable<FragmentResult3014>;

export type FragmentToken3014 =
  | FragmentSelf3014["__typename"]
  | FragmentSelf3014["typenameHint"] | FragmentToken3012 | FragmentToken3013;
