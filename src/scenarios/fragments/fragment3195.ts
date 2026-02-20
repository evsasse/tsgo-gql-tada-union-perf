import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3193 } from "./fragment3193";
import type { FragmentToken3194 } from "./fragment3194";

export const FRAGMENT_3195 = gql(`
  fragment Fragment3195 on Member114 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_114
    memberCount_114
    memberMetric_114
  }
`);

type FragmentResult3195 = ResultOf<typeof FRAGMENT_3195>;
type FragmentSelf3195 = NonNullable<FragmentResult3195>;

export type FragmentToken3195 =
  | FragmentSelf3195["__typename"]
  | FragmentSelf3195["typenameHint"] | FragmentToken3193 | FragmentToken3194;
