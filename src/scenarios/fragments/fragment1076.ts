import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1074 } from "./fragment1074";
import type { FragmentToken1075 } from "./fragment1075";

export const FRAGMENT_1076 = gql(`
  fragment Fragment1076 on Member235 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_235
    memberCount_235
    memberMetric_235
  }
`);

type FragmentResult1076 = ResultOf<typeof FRAGMENT_1076>;
type FragmentSelf1076 = NonNullable<FragmentResult1076>;

export type FragmentToken1076 =
  | FragmentSelf1076["__typename"]
  | FragmentSelf1076["typenameHint"] | FragmentToken1074 | FragmentToken1075;
