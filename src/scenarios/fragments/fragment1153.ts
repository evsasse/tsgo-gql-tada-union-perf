import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1151 } from "./fragment1151";
import type { FragmentToken1152 } from "./fragment1152";

export const FRAGMENT_1153 = gql(`
  fragment Fragment1153 on Member32 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_32
    memberCount_32
    memberMetric_32
  }
`);

type FragmentResult1153 = ResultOf<typeof FRAGMENT_1153>;
type FragmentSelf1153 = NonNullable<FragmentResult1153>;

export type FragmentToken1153 =
  | FragmentSelf1153["__typename"]
  | FragmentSelf1153["typenameHint"] | FragmentToken1151 | FragmentToken1152;
