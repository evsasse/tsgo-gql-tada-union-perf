import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1141 } from "./fragment1141";
import type { FragmentToken1142 } from "./fragment1142";

export const FRAGMENT_1143 = gql(`
  fragment Fragment1143 on Member22 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_22
    memberCount_22
    memberMetric_22
  }
`);

type FragmentResult1143 = ResultOf<typeof FRAGMENT_1143>;
type FragmentSelf1143 = NonNullable<FragmentResult1143>;

export type FragmentToken1143 =
  | FragmentSelf1143["__typename"]
  | FragmentSelf1143["typenameHint"] | FragmentToken1141 | FragmentToken1142;
