import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3494 } from "./fragment3494";
import type { FragmentToken3495 } from "./fragment3495";

export const FRAGMENT_3496 = gql(`
  fragment Fragment3496 on Member135 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_135
    memberCount_135
    memberMetric_135
  }
`);

type FragmentResult3496 = ResultOf<typeof FRAGMENT_3496>;
type FragmentSelf3496 = NonNullable<FragmentResult3496>;

export type FragmentToken3496 =
  | FragmentSelf3496["__typename"]
  | FragmentSelf3496["typenameHint"] | FragmentToken3494 | FragmentToken3495;
