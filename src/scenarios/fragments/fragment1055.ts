import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1053 } from "./fragment1053";
import type { FragmentToken1054 } from "./fragment1054";

export const FRAGMENT_1055 = gql(`
  fragment Fragment1055 on Member214 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_214
    memberCount_214
    memberMetric_214
  }
`);

type FragmentResult1055 = ResultOf<typeof FRAGMENT_1055>;
type FragmentSelf1055 = NonNullable<FragmentResult1055>;

export type FragmentToken1055 =
  | FragmentSelf1055["__typename"]
  | FragmentSelf1055["typenameHint"] | FragmentToken1053 | FragmentToken1054;
