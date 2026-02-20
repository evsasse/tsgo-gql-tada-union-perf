import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1158 } from "./fragment1158";
import type { FragmentToken1159 } from "./fragment1159";

export const FRAGMENT_1160 = gql(`
  fragment Fragment1160 on Member39 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_39
    memberCount_39
    memberMetric_39
  }
`);

type FragmentResult1160 = ResultOf<typeof FRAGMENT_1160>;
type FragmentSelf1160 = NonNullable<FragmentResult1160>;

export type FragmentToken1160 =
  | FragmentSelf1160["__typename"]
  | FragmentSelf1160["typenameHint"] | FragmentToken1158 | FragmentToken1159;
