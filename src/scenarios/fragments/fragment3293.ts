import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3291 } from "./fragment3291";
import type { FragmentToken3292 } from "./fragment3292";

export const FRAGMENT_3293 = gql(`
  fragment Fragment3293 on Member212 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_212
    memberCount_212
    memberMetric_212
  }
`);

type FragmentResult3293 = ResultOf<typeof FRAGMENT_3293>;
type FragmentSelf3293 = NonNullable<FragmentResult3293>;

export type FragmentToken3293 =
  | FragmentSelf3293["__typename"]
  | FragmentSelf3293["typenameHint"] | FragmentToken3291 | FragmentToken3292;
