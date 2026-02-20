import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1246 } from "./fragment1246";
import type { FragmentToken1247 } from "./fragment1247";

export const FRAGMENT_1248 = gql(`
  fragment Fragment1248 on Member127 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_127
    memberCount_127
    memberMetric_127
  }
`);

type FragmentResult1248 = ResultOf<typeof FRAGMENT_1248>;
type FragmentSelf1248 = NonNullable<FragmentResult1248>;

export type FragmentToken1248 =
  | FragmentSelf1248["__typename"]
  | FragmentSelf1248["typenameHint"] | FragmentToken1246 | FragmentToken1247;
