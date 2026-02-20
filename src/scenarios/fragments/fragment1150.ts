import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1148 } from "./fragment1148";
import type { FragmentToken1149 } from "./fragment1149";

export const FRAGMENT_1150 = gql(`
  fragment Fragment1150 on Member29 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_29
    memberCount_29
    memberMetric_29
  }
`);

type FragmentResult1150 = ResultOf<typeof FRAGMENT_1150>;
type FragmentSelf1150 = NonNullable<FragmentResult1150>;

export type FragmentToken1150 =
  | FragmentSelf1150["__typename"]
  | FragmentSelf1150["typenameHint"] | FragmentToken1148 | FragmentToken1149;
