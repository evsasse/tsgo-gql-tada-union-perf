import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1075 } from "./fragment1075";
import type { FragmentToken1076 } from "./fragment1076";

export const FRAGMENT_1077 = gql(`
  fragment Fragment1077 on Member236 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_236
    memberCount_236
    memberMetric_236
  }
`);

type FragmentResult1077 = ResultOf<typeof FRAGMENT_1077>;
type FragmentSelf1077 = NonNullable<FragmentResult1077>;

export type FragmentToken1077 =
  | FragmentSelf1077["__typename"]
  | FragmentSelf1077["typenameHint"] | FragmentToken1075 | FragmentToken1076;
