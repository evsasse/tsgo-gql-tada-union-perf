import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1188 } from "./fragment1188";
import type { FragmentToken1189 } from "./fragment1189";

export const FRAGMENT_1190 = gql(`
  fragment Fragment1190 on Member69 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_69
    memberCount_69
    memberMetric_69
  }
`);

type FragmentResult1190 = ResultOf<typeof FRAGMENT_1190>;
type FragmentSelf1190 = NonNullable<FragmentResult1190>;

export type FragmentToken1190 =
  | FragmentSelf1190["__typename"]
  | FragmentSelf1190["typenameHint"] | FragmentToken1188 | FragmentToken1189;
