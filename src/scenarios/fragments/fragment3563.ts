import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3561 } from "./fragment3561";
import type { FragmentToken3562 } from "./fragment3562";

export const FRAGMENT_3563 = gql(`
  fragment Fragment3563 on Member202 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_202
    memberCount_202
    memberMetric_202
  }
`);

type FragmentResult3563 = ResultOf<typeof FRAGMENT_3563>;
type FragmentSelf3563 = NonNullable<FragmentResult3563>;

export type FragmentToken3563 =
  | FragmentSelf3563["__typename"]
  | FragmentSelf3563["typenameHint"] | FragmentToken3561 | FragmentToken3562;
