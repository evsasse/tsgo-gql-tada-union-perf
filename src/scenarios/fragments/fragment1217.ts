import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1215 } from "./fragment1215";
import type { FragmentToken1216 } from "./fragment1216";

export const FRAGMENT_1217 = gql(`
  fragment Fragment1217 on Member96 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_96
    memberCount_96
    memberMetric_96
  }
`);

type FragmentResult1217 = ResultOf<typeof FRAGMENT_1217>;
type FragmentSelf1217 = NonNullable<FragmentResult1217>;

export type FragmentToken1217 =
  | FragmentSelf1217["__typename"]
  | FragmentSelf1217["typenameHint"] | FragmentToken1215 | FragmentToken1216;
