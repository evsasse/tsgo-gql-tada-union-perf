import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1149 } from "./fragment1149";
import type { FragmentToken1150 } from "./fragment1150";

export const FRAGMENT_1151 = gql(`
  fragment Fragment1151 on Member30 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_30
    memberCount_30
    memberMetric_30
  }
`);

type FragmentResult1151 = ResultOf<typeof FRAGMENT_1151>;
type FragmentSelf1151 = NonNullable<FragmentResult1151>;

export type FragmentToken1151 =
  | FragmentSelf1151["__typename"]
  | FragmentSelf1151["typenameHint"] | FragmentToken1149 | FragmentToken1150;
