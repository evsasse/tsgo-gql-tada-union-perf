import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1269 } from "./fragment1269";
import type { FragmentToken1270 } from "./fragment1270";

export const FRAGMENT_1271 = gql(`
  fragment Fragment1271 on Member150 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_150
    memberCount_150
    memberMetric_150
  }
`);

type FragmentResult1271 = ResultOf<typeof FRAGMENT_1271>;
type FragmentSelf1271 = NonNullable<FragmentResult1271>;

export type FragmentToken1271 =
  | FragmentSelf1271["__typename"]
  | FragmentSelf1271["typenameHint"] | FragmentToken1269 | FragmentToken1270;
