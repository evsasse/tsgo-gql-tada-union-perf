import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3461 } from "./fragment3461";
import type { FragmentToken3462 } from "./fragment3462";

export const FRAGMENT_3463 = gql(`
  fragment Fragment3463 on Member102 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_102
    memberCount_102
    memberMetric_102
  }
`);

type FragmentResult3463 = ResultOf<typeof FRAGMENT_3463>;
type FragmentSelf3463 = NonNullable<FragmentResult3463>;

export type FragmentToken3463 =
  | FragmentSelf3463["__typename"]
  | FragmentSelf3463["typenameHint"] | FragmentToken3461 | FragmentToken3462;
