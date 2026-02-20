import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1290 } from "./fragment1290";
import type { FragmentToken1291 } from "./fragment1291";

export const FRAGMENT_1292 = gql(`
  fragment Fragment1292 on Member171 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_171
    memberCount_171
    memberMetric_171
  }
`);

type FragmentResult1292 = ResultOf<typeof FRAGMENT_1292>;
type FragmentSelf1292 = NonNullable<FragmentResult1292>;

export type FragmentToken1292 =
  | FragmentSelf1292["__typename"]
  | FragmentSelf1292["typenameHint"] | FragmentToken1290 | FragmentToken1291;
