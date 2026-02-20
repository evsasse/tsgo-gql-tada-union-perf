import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1156 } from "./fragment1156";
import type { FragmentToken1157 } from "./fragment1157";

export const FRAGMENT_1158 = gql(`
  fragment Fragment1158 on Member37 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_37
    memberCount_37
    memberMetric_37
  }
`);

type FragmentResult1158 = ResultOf<typeof FRAGMENT_1158>;
type FragmentSelf1158 = NonNullable<FragmentResult1158>;

export type FragmentToken1158 =
  | FragmentSelf1158["__typename"]
  | FragmentSelf1158["typenameHint"] | FragmentToken1156 | FragmentToken1157;
