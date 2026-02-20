import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1237 } from "./fragment1237";
import type { FragmentToken1238 } from "./fragment1238";

export const FRAGMENT_1239 = gql(`
  fragment Fragment1239 on Member118 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_118
    memberCount_118
    memberMetric_118
  }
`);

type FragmentResult1239 = ResultOf<typeof FRAGMENT_1239>;
type FragmentSelf1239 = NonNullable<FragmentResult1239>;

export type FragmentToken1239 =
  | FragmentSelf1239["__typename"]
  | FragmentSelf1239["typenameHint"] | FragmentToken1237 | FragmentToken1238;
