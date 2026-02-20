import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3251 } from "./fragment3251";
import type { FragmentToken3252 } from "./fragment3252";

export const FRAGMENT_3253 = gql(`
  fragment Fragment3253 on Member172 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_172
    memberCount_172
    memberMetric_172
  }
`);

type FragmentResult3253 = ResultOf<typeof FRAGMENT_3253>;
type FragmentSelf3253 = NonNullable<FragmentResult3253>;

export type FragmentToken3253 =
  | FragmentSelf3253["__typename"]
  | FragmentSelf3253["typenameHint"] | FragmentToken3251 | FragmentToken3252;
