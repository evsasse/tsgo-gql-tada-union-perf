import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1249 } from "./fragment1249";
import type { FragmentToken1250 } from "./fragment1250";

export const FRAGMENT_1251 = gql(`
  fragment Fragment1251 on Member130 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_130
    memberCount_130
    memberMetric_130
  }
`);

type FragmentResult1251 = ResultOf<typeof FRAGMENT_1251>;
type FragmentSelf1251 = NonNullable<FragmentResult1251>;

export type FragmentToken1251 =
  | FragmentSelf1251["__typename"]
  | FragmentSelf1251["typenameHint"] | FragmentToken1249 | FragmentToken1250;
