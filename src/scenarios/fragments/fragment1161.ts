import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1159 } from "./fragment1159";
import type { FragmentToken1160 } from "./fragment1160";

export const FRAGMENT_1161 = gql(`
  fragment Fragment1161 on Member40 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_40
    memberCount_40
    memberMetric_40
  }
`);

type FragmentResult1161 = ResultOf<typeof FRAGMENT_1161>;
type FragmentSelf1161 = NonNullable<FragmentResult1161>;

export type FragmentToken1161 =
  | FragmentSelf1161["__typename"]
  | FragmentSelf1161["typenameHint"] | FragmentToken1159 | FragmentToken1160;
