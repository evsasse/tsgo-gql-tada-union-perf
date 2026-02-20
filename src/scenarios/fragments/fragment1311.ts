import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1309 } from "./fragment1309";
import type { FragmentToken1310 } from "./fragment1310";

export const FRAGMENT_1311 = gql(`
  fragment Fragment1311 on Member190 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_190
    memberCount_190
    memberMetric_190
  }
`);

type FragmentResult1311 = ResultOf<typeof FRAGMENT_1311>;
type FragmentSelf1311 = NonNullable<FragmentResult1311>;

export type FragmentToken1311 =
  | FragmentSelf1311["__typename"]
  | FragmentSelf1311["typenameHint"] | FragmentToken1309 | FragmentToken1310;
