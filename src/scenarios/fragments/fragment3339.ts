import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3337 } from "./fragment3337";
import type { FragmentToken3338 } from "./fragment3338";

export const FRAGMENT_3339 = gql(`
  fragment Fragment3339 on Member258 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_258
    memberCount_258
    memberMetric_258
  }
`);

type FragmentResult3339 = ResultOf<typeof FRAGMENT_3339>;
type FragmentSelf3339 = NonNullable<FragmentResult3339>;

export type FragmentToken3339 =
  | FragmentSelf3339["__typename"]
  | FragmentSelf3339["typenameHint"] | FragmentToken3337 | FragmentToken3338;
