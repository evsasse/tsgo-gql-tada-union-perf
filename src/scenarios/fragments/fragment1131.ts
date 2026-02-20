import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1129 } from "./fragment1129";
import type { FragmentToken1130 } from "./fragment1130";

export const FRAGMENT_1131 = gql(`
  fragment Fragment1131 on Member10 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_10
    memberCount_10
    memberMetric_10
  }
`);

type FragmentResult1131 = ResultOf<typeof FRAGMENT_1131>;
type FragmentSelf1131 = NonNullable<FragmentResult1131>;

export type FragmentToken1131 =
  | FragmentSelf1131["__typename"]
  | FragmentSelf1131["typenameHint"] | FragmentToken1129 | FragmentToken1130;
