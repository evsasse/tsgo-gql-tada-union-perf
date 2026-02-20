import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3572 } from "./fragment3572";
import type { FragmentToken3573 } from "./fragment3573";

export const FRAGMENT_3574 = gql(`
  fragment Fragment3574 on Member213 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_213
    memberCount_213
    memberMetric_213
  }
`);

type FragmentResult3574 = ResultOf<typeof FRAGMENT_3574>;
type FragmentSelf3574 = NonNullable<FragmentResult3574>;

export type FragmentToken3574 =
  | FragmentSelf3574["__typename"]
  | FragmentSelf3574["typenameHint"] | FragmentToken3572 | FragmentToken3573;
