import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1130 } from "./fragment1130";
import type { FragmentToken1131 } from "./fragment1131";

export const FRAGMENT_1132 = gql(`
  fragment Fragment1132 on Member11 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_11
    memberCount_11
    memberMetric_11
  }
`);

type FragmentResult1132 = ResultOf<typeof FRAGMENT_1132>;
type FragmentSelf1132 = NonNullable<FragmentResult1132>;

export type FragmentToken1132 =
  | FragmentSelf1132["__typename"]
  | FragmentSelf1132["typenameHint"] | FragmentToken1130 | FragmentToken1131;
