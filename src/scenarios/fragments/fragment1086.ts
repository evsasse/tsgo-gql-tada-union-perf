import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1084 } from "./fragment1084";
import type { FragmentToken1085 } from "./fragment1085";

export const FRAGMENT_1086 = gql(`
  fragment Fragment1086 on Member245 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_245
    memberCount_245
    memberMetric_245
  }
`);

type FragmentResult1086 = ResultOf<typeof FRAGMENT_1086>;
type FragmentSelf1086 = NonNullable<FragmentResult1086>;

export type FragmentToken1086 =
  | FragmentSelf1086["__typename"]
  | FragmentSelf1086["typenameHint"] | FragmentToken1084 | FragmentToken1085;
