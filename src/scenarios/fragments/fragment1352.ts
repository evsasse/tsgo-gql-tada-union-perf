import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1350 } from "./fragment1350";
import type { FragmentToken1351 } from "./fragment1351";

export const FRAGMENT_1352 = gql(`
  fragment Fragment1352 on Member231 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_231
    memberCount_231
    memberMetric_231
  }
`);

type FragmentResult1352 = ResultOf<typeof FRAGMENT_1352>;
type FragmentSelf1352 = NonNullable<FragmentResult1352>;

export type FragmentToken1352 =
  | FragmentSelf1352["__typename"]
  | FragmentSelf1352["typenameHint"] | FragmentToken1350 | FragmentToken1351;
