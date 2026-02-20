import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3530 } from "./fragment3530";
import type { FragmentToken3531 } from "./fragment3531";

export const FRAGMENT_3532 = gql(`
  fragment Fragment3532 on Member171 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_171
    memberCount_171
    memberMetric_171
  }
`);

type FragmentResult3532 = ResultOf<typeof FRAGMENT_3532>;
type FragmentSelf3532 = NonNullable<FragmentResult3532>;

export type FragmentToken3532 =
  | FragmentSelf3532["__typename"]
  | FragmentSelf3532["typenameHint"] | FragmentToken3530 | FragmentToken3531;
