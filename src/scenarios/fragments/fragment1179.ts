import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1177 } from "./fragment1177";
import type { FragmentToken1178 } from "./fragment1178";

export const FRAGMENT_1179 = gql(`
  fragment Fragment1179 on Member58 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_58
    memberCount_58
    memberMetric_58
  }
`);

type FragmentResult1179 = ResultOf<typeof FRAGMENT_1179>;
type FragmentSelf1179 = NonNullable<FragmentResult1179>;

export type FragmentToken1179 =
  | FragmentSelf1179["__typename"]
  | FragmentSelf1179["typenameHint"] | FragmentToken1177 | FragmentToken1178;
