import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3448 } from "./fragment3448";
import type { FragmentToken3449 } from "./fragment3449";

export const FRAGMENT_3450 = gql(`
  fragment Fragment3450 on Member89 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_89
    memberCount_89
    memberMetric_89
  }
`);

type FragmentResult3450 = ResultOf<typeof FRAGMENT_3450>;
type FragmentSelf3450 = NonNullable<FragmentResult3450>;

export type FragmentToken3450 =
  | FragmentSelf3450["__typename"]
  | FragmentSelf3450["typenameHint"] | FragmentToken3448 | FragmentToken3449;
