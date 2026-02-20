import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3278 } from "./fragment3278";
import type { FragmentToken3279 } from "./fragment3279";

export const FRAGMENT_3280 = gql(`
  fragment Fragment3280 on Member199 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_199
    memberCount_199
    memberMetric_199
  }
`);

type FragmentResult3280 = ResultOf<typeof FRAGMENT_3280>;
type FragmentSelf3280 = NonNullable<FragmentResult3280>;

export type FragmentToken3280 =
  | FragmentSelf3280["__typename"]
  | FragmentSelf3280["typenameHint"] | FragmentToken3278 | FragmentToken3279;
