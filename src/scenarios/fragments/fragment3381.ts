import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3379 } from "./fragment3379";
import type { FragmentToken3380 } from "./fragment3380";

export const FRAGMENT_3381 = gql(`
  fragment Fragment3381 on Member20 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_20
    memberCount_20
    memberMetric_20
  }
`);

type FragmentResult3381 = ResultOf<typeof FRAGMENT_3381>;
type FragmentSelf3381 = NonNullable<FragmentResult3381>;

export type FragmentToken3381 =
  | FragmentSelf3381["__typename"]
  | FragmentSelf3381["typenameHint"] | FragmentToken3379 | FragmentToken3380;
