import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3138 } from "./fragment3138";
import type { FragmentToken3139 } from "./fragment3139";

export const FRAGMENT_3140 = gql(`
  fragment Fragment3140 on Member59 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_59
    memberCount_59
    memberMetric_59
  }
`);

type FragmentResult3140 = ResultOf<typeof FRAGMENT_3140>;
type FragmentSelf3140 = NonNullable<FragmentResult3140>;

export type FragmentToken3140 =
  | FragmentSelf3140["__typename"]
  | FragmentSelf3140["typenameHint"] | FragmentToken3138 | FragmentToken3139;
