import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1152 } from "./fragment1152";
import type { FragmentToken1153 } from "./fragment1153";

export const FRAGMENT_1154 = gql(`
  fragment Fragment1154 on Member33 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_33
    memberCount_33
    memberMetric_33
  }
`);

type FragmentResult1154 = ResultOf<typeof FRAGMENT_1154>;
type FragmentSelf1154 = NonNullable<FragmentResult1154>;

export type FragmentToken1154 =
  | FragmentSelf1154["__typename"]
  | FragmentSelf1154["typenameHint"] | FragmentToken1152 | FragmentToken1153;
