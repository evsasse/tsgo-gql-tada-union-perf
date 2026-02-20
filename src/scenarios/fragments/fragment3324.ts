import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3322 } from "./fragment3322";
import type { FragmentToken3323 } from "./fragment3323";

export const FRAGMENT_3324 = gql(`
  fragment Fragment3324 on Member243 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_243
    memberCount_243
    memberMetric_243
  }
`);

type FragmentResult3324 = ResultOf<typeof FRAGMENT_3324>;
type FragmentSelf3324 = NonNullable<FragmentResult3324>;

export type FragmentToken3324 =
  | FragmentSelf3324["__typename"]
  | FragmentSelf3324["typenameHint"] | FragmentToken3322 | FragmentToken3323;
