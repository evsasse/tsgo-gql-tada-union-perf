import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3315 } from "./fragment3315";
import type { FragmentToken3316 } from "./fragment3316";

export const FRAGMENT_3317 = gql(`
  fragment Fragment3317 on Member236 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_236
    memberCount_236
    memberMetric_236
  }
`);

type FragmentResult3317 = ResultOf<typeof FRAGMENT_3317>;
type FragmentSelf3317 = NonNullable<FragmentResult3317>;

export type FragmentToken3317 =
  | FragmentSelf3317["__typename"]
  | FragmentSelf3317["typenameHint"] | FragmentToken3315 | FragmentToken3316;
