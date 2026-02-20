import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1052 } from "./fragment1052";
import type { FragmentToken1053 } from "./fragment1053";

export const FRAGMENT_1054 = gql(`
  fragment Fragment1054 on Member213 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_213
    memberCount_213
    memberMetric_213
  }
`);

type FragmentResult1054 = ResultOf<typeof FRAGMENT_1054>;
type FragmentSelf1054 = NonNullable<FragmentResult1054>;

export type FragmentToken1054 =
  | FragmentSelf1054["__typename"]
  | FragmentSelf1054["typenameHint"] | FragmentToken1052 | FragmentToken1053;
