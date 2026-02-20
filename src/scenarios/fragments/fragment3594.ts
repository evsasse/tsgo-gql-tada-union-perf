import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3592 } from "./fragment3592";
import type { FragmentToken3593 } from "./fragment3593";

export const FRAGMENT_3594 = gql(`
  fragment Fragment3594 on Member233 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_233
    memberCount_233
    memberMetric_233
  }
`);

type FragmentResult3594 = ResultOf<typeof FRAGMENT_3594>;
type FragmentSelf3594 = NonNullable<FragmentResult3594>;

export type FragmentToken3594 =
  | FragmentSelf3594["__typename"]
  | FragmentSelf3594["typenameHint"] | FragmentToken3592 | FragmentToken3593;
