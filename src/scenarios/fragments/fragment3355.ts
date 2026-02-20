import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3353 } from "./fragment3353";
import type { FragmentToken3354 } from "./fragment3354";

export const FRAGMENT_3355 = gql(`
  fragment Fragment3355 on Member274 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_274
    memberCount_274
    memberMetric_274
  }
`);

type FragmentResult3355 = ResultOf<typeof FRAGMENT_3355>;
type FragmentSelf3355 = NonNullable<FragmentResult3355>;

export type FragmentToken3355 =
  | FragmentSelf3355["__typename"]
  | FragmentSelf3355["typenameHint"] | FragmentToken3353 | FragmentToken3354;
