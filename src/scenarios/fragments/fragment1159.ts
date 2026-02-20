import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1157 } from "./fragment1157";
import type { FragmentToken1158 } from "./fragment1158";

export const FRAGMENT_1159 = gql(`
  fragment Fragment1159 on Member38 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_38
    memberCount_38
    memberMetric_38
  }
`);

type FragmentResult1159 = ResultOf<typeof FRAGMENT_1159>;
type FragmentSelf1159 = NonNullable<FragmentResult1159>;

export type FragmentToken1159 =
  | FragmentSelf1159["__typename"]
  | FragmentSelf1159["typenameHint"] | FragmentToken1157 | FragmentToken1158;
