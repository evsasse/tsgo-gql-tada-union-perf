import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3381 } from "./fragment3381";
import type { FragmentToken3382 } from "./fragment3382";

export const FRAGMENT_3383 = gql(`
  fragment Fragment3383 on Member22 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_22
    memberCount_22
    memberMetric_22
  }
`);

type FragmentResult3383 = ResultOf<typeof FRAGMENT_3383>;
type FragmentSelf3383 = NonNullable<FragmentResult3383>;

export type FragmentToken3383 =
  | FragmentSelf3383["__typename"]
  | FragmentSelf3383["typenameHint"] | FragmentToken3381 | FragmentToken3382;
