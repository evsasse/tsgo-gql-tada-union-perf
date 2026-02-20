import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3372 } from "./fragment3372";
import type { FragmentToken3373 } from "./fragment3373";

export const FRAGMENT_3374 = gql(`
  fragment Fragment3374 on Member13 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_13
    memberCount_13
    memberMetric_13
  }
`);

type FragmentResult3374 = ResultOf<typeof FRAGMENT_3374>;
type FragmentSelf3374 = NonNullable<FragmentResult3374>;

export type FragmentToken3374 =
  | FragmentSelf3374["__typename"]
  | FragmentSelf3374["typenameHint"] | FragmentToken3372 | FragmentToken3373;
