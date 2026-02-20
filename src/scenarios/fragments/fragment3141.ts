import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3139 } from "./fragment3139";
import type { FragmentToken3140 } from "./fragment3140";

export const FRAGMENT_3141 = gql(`
  fragment Fragment3141 on Member60 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_60
    memberCount_60
    memberMetric_60
  }
`);

type FragmentResult3141 = ResultOf<typeof FRAGMENT_3141>;
type FragmentSelf3141 = NonNullable<FragmentResult3141>;

export type FragmentToken3141 =
  | FragmentSelf3141["__typename"]
  | FragmentSelf3141["typenameHint"] | FragmentToken3139 | FragmentToken3140;
