import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3479 } from "./fragment3479";
import type { FragmentToken3480 } from "./fragment3480";

export const FRAGMENT_3481 = gql(`
  fragment Fragment3481 on Member120 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_120
    memberCount_120
    memberMetric_120
  }
`);

type FragmentResult3481 = ResultOf<typeof FRAGMENT_3481>;
type FragmentSelf3481 = NonNullable<FragmentResult3481>;

export type FragmentToken3481 =
  | FragmentSelf3481["__typename"]
  | FragmentSelf3481["typenameHint"] | FragmentToken3479 | FragmentToken3480;
