import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1147 } from "./fragment1147";
import type { FragmentToken1148 } from "./fragment1148";

export const FRAGMENT_1149 = gql(`
  fragment Fragment1149 on Member28 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_28
    memberCount_28
    memberMetric_28
  }
`);

type FragmentResult1149 = ResultOf<typeof FRAGMENT_1149>;
type FragmentSelf1149 = NonNullable<FragmentResult1149>;

export type FragmentToken1149 =
  | FragmentSelf1149["__typename"]
  | FragmentSelf1149["typenameHint"] | FragmentToken1147 | FragmentToken1148;
