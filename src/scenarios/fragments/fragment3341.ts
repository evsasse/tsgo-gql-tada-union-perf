import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3339 } from "./fragment3339";
import type { FragmentToken3340 } from "./fragment3340";

export const FRAGMENT_3341 = gql(`
  fragment Fragment3341 on Member260 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_260
    memberCount_260
    memberMetric_260
  }
`);

type FragmentResult3341 = ResultOf<typeof FRAGMENT_3341>;
type FragmentSelf3341 = NonNullable<FragmentResult3341>;

export type FragmentToken3341 =
  | FragmentSelf3341["__typename"]
  | FragmentSelf3341["typenameHint"] | FragmentToken3339 | FragmentToken3340;
