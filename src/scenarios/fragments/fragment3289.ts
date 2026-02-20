import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3287 } from "./fragment3287";
import type { FragmentToken3288 } from "./fragment3288";

export const FRAGMENT_3289 = gql(`
  fragment Fragment3289 on Member208 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_208
    memberCount_208
    memberMetric_208
  }
`);

type FragmentResult3289 = ResultOf<typeof FRAGMENT_3289>;
type FragmentSelf3289 = NonNullable<FragmentResult3289>;

export type FragmentToken3289 =
  | FragmentSelf3289["__typename"]
  | FragmentSelf3289["typenameHint"] | FragmentToken3287 | FragmentToken3288;
