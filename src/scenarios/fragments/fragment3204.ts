import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3202 } from "./fragment3202";
import type { FragmentToken3203 } from "./fragment3203";

export const FRAGMENT_3204 = gql(`
  fragment Fragment3204 on Member123 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_123
    memberCount_123
    memberMetric_123
  }
`);

type FragmentResult3204 = ResultOf<typeof FRAGMENT_3204>;
type FragmentSelf3204 = NonNullable<FragmentResult3204>;

export type FragmentToken3204 =
  | FragmentSelf3204["__typename"]
  | FragmentSelf3204["typenameHint"] | FragmentToken3202 | FragmentToken3203;
