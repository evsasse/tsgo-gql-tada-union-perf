import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3562 } from "./fragment3562";
import type { FragmentToken3563 } from "./fragment3563";

export const FRAGMENT_3564 = gql(`
  fragment Fragment3564 on Member203 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_203
    memberCount_203
    memberMetric_203
  }
`);

type FragmentResult3564 = ResultOf<typeof FRAGMENT_3564>;
type FragmentSelf3564 = NonNullable<FragmentResult3564>;

export type FragmentToken3564 =
  | FragmentSelf3564["__typename"]
  | FragmentSelf3564["typenameHint"] | FragmentToken3562 | FragmentToken3563;
