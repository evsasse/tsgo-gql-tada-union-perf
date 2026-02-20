import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3282 } from "./fragment3282";
import type { FragmentToken3283 } from "./fragment3283";

export const FRAGMENT_3284 = gql(`
  fragment Fragment3284 on Member203 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_203
    memberCount_203
    memberMetric_203
  }
`);

type FragmentResult3284 = ResultOf<typeof FRAGMENT_3284>;
type FragmentSelf3284 = NonNullable<FragmentResult3284>;

export type FragmentToken3284 =
  | FragmentSelf3284["__typename"]
  | FragmentSelf3284["typenameHint"] | FragmentToken3282 | FragmentToken3283;
