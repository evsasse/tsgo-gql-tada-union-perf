import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3340 } from "./fragment3340";
import type { FragmentToken3341 } from "./fragment3341";

export const FRAGMENT_3342 = gql(`
  fragment Fragment3342 on Member261 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_261
    memberCount_261
    memberMetric_261
  }
`);

type FragmentResult3342 = ResultOf<typeof FRAGMENT_3342>;
type FragmentSelf3342 = NonNullable<FragmentResult3342>;

export type FragmentToken3342 =
  | FragmentSelf3342["__typename"]
  | FragmentSelf3342["typenameHint"] | FragmentToken3340 | FragmentToken3341;
