import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3284 } from "./fragment3284";
import type { FragmentToken3285 } from "./fragment3285";

export const FRAGMENT_3286 = gql(`
  fragment Fragment3286 on Member205 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_205
    memberCount_205
    memberMetric_205
  }
`);

type FragmentResult3286 = ResultOf<typeof FRAGMENT_3286>;
type FragmentSelf3286 = NonNullable<FragmentResult3286>;

export type FragmentToken3286 =
  | FragmentSelf3286["__typename"]
  | FragmentSelf3286["typenameHint"] | FragmentToken3284 | FragmentToken3285;
