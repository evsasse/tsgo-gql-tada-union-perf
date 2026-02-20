import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1138 } from "./fragment1138";
import type { FragmentToken1139 } from "./fragment1139";

export const FRAGMENT_1140 = gql(`
  fragment Fragment1140 on Member19 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_19
    memberCount_19
    memberMetric_19
  }
`);

type FragmentResult1140 = ResultOf<typeof FRAGMENT_1140>;
type FragmentSelf1140 = NonNullable<FragmentResult1140>;

export type FragmentToken1140 =
  | FragmentSelf1140["__typename"]
  | FragmentSelf1140["typenameHint"] | FragmentToken1138 | FragmentToken1139;
