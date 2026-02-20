import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1209 } from "./fragment1209";
import type { FragmentToken1210 } from "./fragment1210";

export const FRAGMENT_1211 = gql(`
  fragment Fragment1211 on Member90 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_90
    memberCount_90
    memberMetric_90
  }
`);

type FragmentResult1211 = ResultOf<typeof FRAGMENT_1211>;
type FragmentSelf1211 = NonNullable<FragmentResult1211>;

export type FragmentToken1211 =
  | FragmentSelf1211["__typename"]
  | FragmentSelf1211["typenameHint"] | FragmentToken1209 | FragmentToken1210;
