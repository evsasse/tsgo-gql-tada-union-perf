import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1349 } from "./fragment1349";
import type { FragmentToken1350 } from "./fragment1350";

export const FRAGMENT_1351 = gql(`
  fragment Fragment1351 on Member230 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_230
    memberCount_230
    memberMetric_230
  }
`);

type FragmentResult1351 = ResultOf<typeof FRAGMENT_1351>;
type FragmentSelf1351 = NonNullable<FragmentResult1351>;

export type FragmentToken1351 =
  | FragmentSelf1351["__typename"]
  | FragmentSelf1351["typenameHint"] | FragmentToken1349 | FragmentToken1350;
