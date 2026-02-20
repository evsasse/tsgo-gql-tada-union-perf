import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3439 } from "./fragment3439";
import type { FragmentToken3440 } from "./fragment3440";

export const FRAGMENT_3441 = gql(`
  fragment Fragment3441 on Member80 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_80
    memberCount_80
    memberMetric_80
  }
`);

type FragmentResult3441 = ResultOf<typeof FRAGMENT_3441>;
type FragmentSelf3441 = NonNullable<FragmentResult3441>;

export type FragmentToken3441 =
  | FragmentSelf3441["__typename"]
  | FragmentSelf3441["typenameHint"] | FragmentToken3439 | FragmentToken3440;
