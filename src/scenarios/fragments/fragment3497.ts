import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3495 } from "./fragment3495";
import type { FragmentToken3496 } from "./fragment3496";

export const FRAGMENT_3497 = gql(`
  fragment Fragment3497 on Member136 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_136
    memberCount_136
    memberMetric_136
  }
`);

type FragmentResult3497 = ResultOf<typeof FRAGMENT_3497>;
type FragmentSelf3497 = NonNullable<FragmentResult3497>;

export type FragmentToken3497 =
  | FragmentSelf3497["__typename"]
  | FragmentSelf3497["typenameHint"] | FragmentToken3495 | FragmentToken3496;
