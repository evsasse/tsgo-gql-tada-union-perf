import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3261 } from "./fragment3261";
import type { FragmentToken3262 } from "./fragment3262";

export const FRAGMENT_3263 = gql(`
  fragment Fragment3263 on Member182 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_182
    memberCount_182
    memberMetric_182
  }
`);

type FragmentResult3263 = ResultOf<typeof FRAGMENT_3263>;
type FragmentSelf3263 = NonNullable<FragmentResult3263>;

export type FragmentToken3263 =
  | FragmentSelf3263["__typename"]
  | FragmentSelf3263["typenameHint"] | FragmentToken3261 | FragmentToken3262;
