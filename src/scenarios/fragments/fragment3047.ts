import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3045 } from "./fragment3045";
import type { FragmentToken3046 } from "./fragment3046";

export const FRAGMENT_3047 = gql(`
  fragment Fragment3047 on Member246 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_246
    memberCount_246
    memberMetric_246
  }
`);

type FragmentResult3047 = ResultOf<typeof FRAGMENT_3047>;
type FragmentSelf3047 = NonNullable<FragmentResult3047>;

export type FragmentToken3047 =
  | FragmentSelf3047["__typename"]
  | FragmentSelf3047["typenameHint"] | FragmentToken3045 | FragmentToken3046;
