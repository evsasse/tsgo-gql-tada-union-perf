import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1128 } from "./fragment1128";
import type { FragmentToken1129 } from "./fragment1129";

export const FRAGMENT_1130 = gql(`
  fragment Fragment1130 on Member09 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_09
    memberCount_09
    memberMetric_09
  }
`);

type FragmentResult1130 = ResultOf<typeof FRAGMENT_1130>;
type FragmentSelf1130 = NonNullable<FragmentResult1130>;

export type FragmentToken1130 =
  | FragmentSelf1130["__typename"]
  | FragmentSelf1130["typenameHint"] | FragmentToken1128 | FragmentToken1129;
