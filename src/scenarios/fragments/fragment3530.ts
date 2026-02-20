import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3528 } from "./fragment3528";
import type { FragmentToken3529 } from "./fragment3529";

export const FRAGMENT_3530 = gql(`
  fragment Fragment3530 on Member169 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_169
    memberCount_169
    memberMetric_169
  }
`);

type FragmentResult3530 = ResultOf<typeof FRAGMENT_3530>;
type FragmentSelf3530 = NonNullable<FragmentResult3530>;

export type FragmentToken3530 =
  | FragmentSelf3530["__typename"]
  | FragmentSelf3530["typenameHint"] | FragmentToken3528 | FragmentToken3529;
