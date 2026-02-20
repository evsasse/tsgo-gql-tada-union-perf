import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3558 } from "./fragment3558";
import type { FragmentToken3559 } from "./fragment3559";

export const FRAGMENT_3560 = gql(`
  fragment Fragment3560 on Member199 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_199
    memberCount_199
    memberMetric_199
  }
`);

type FragmentResult3560 = ResultOf<typeof FRAGMENT_3560>;
type FragmentSelf3560 = NonNullable<FragmentResult3560>;

export type FragmentToken3560 =
  | FragmentSelf3560["__typename"]
  | FragmentSelf3560["typenameHint"] | FragmentToken3558 | FragmentToken3559;
