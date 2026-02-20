import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3277 } from "./fragment3277";
import type { FragmentToken3278 } from "./fragment3278";

export const FRAGMENT_3279 = gql(`
  fragment Fragment3279 on Member198 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_198
    memberCount_198
    memberMetric_198
  }
`);

type FragmentResult3279 = ResultOf<typeof FRAGMENT_3279>;
type FragmentSelf3279 = NonNullable<FragmentResult3279>;

export type FragmentToken3279 =
  | FragmentSelf3279["__typename"]
  | FragmentSelf3279["typenameHint"] | FragmentToken3277 | FragmentToken3278;
