import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3285 } from "./fragment3285";
import type { FragmentToken3286 } from "./fragment3286";

export const FRAGMENT_3287 = gql(`
  fragment Fragment3287 on Member206 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_206
    memberCount_206
    memberMetric_206
  }
`);

type FragmentResult3287 = ResultOf<typeof FRAGMENT_3287>;
type FragmentSelf3287 = NonNullable<FragmentResult3287>;

export type FragmentToken3287 =
  | FragmentSelf3287["__typename"]
  | FragmentSelf3287["typenameHint"] | FragmentToken3285 | FragmentToken3286;
