import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1050 } from "./fragment1050";
import type { FragmentToken1051 } from "./fragment1051";

export const FRAGMENT_1052 = gql(`
  fragment Fragment1052 on Member211 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_211
    memberCount_211
    memberMetric_211
  }
`);

type FragmentResult1052 = ResultOf<typeof FRAGMENT_1052>;
type FragmentSelf1052 = NonNullable<FragmentResult1052>;

export type FragmentToken1052 =
  | FragmentSelf1052["__typename"]
  | FragmentSelf1052["typenameHint"] | FragmentToken1050 | FragmentToken1051;
