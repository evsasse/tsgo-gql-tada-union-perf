import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1193 } from "./fragment1193";
import type { FragmentToken1194 } from "./fragment1194";

export const FRAGMENT_1195 = gql(`
  fragment Fragment1195 on Member74 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_74
    memberCount_74
    memberMetric_74
  }
`);

type FragmentResult1195 = ResultOf<typeof FRAGMENT_1195>;
type FragmentSelf1195 = NonNullable<FragmentResult1195>;

export type FragmentToken1195 =
  | FragmentSelf1195["__typename"]
  | FragmentSelf1195["typenameHint"] | FragmentToken1193 | FragmentToken1194;
