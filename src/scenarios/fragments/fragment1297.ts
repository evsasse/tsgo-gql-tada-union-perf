import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1295 } from "./fragment1295";
import type { FragmentToken1296 } from "./fragment1296";

export const FRAGMENT_1297 = gql(`
  fragment Fragment1297 on Member176 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_176
    memberCount_176
    memberMetric_176
  }
`);

type FragmentResult1297 = ResultOf<typeof FRAGMENT_1297>;
type FragmentSelf1297 = NonNullable<FragmentResult1297>;

export type FragmentToken1297 =
  | FragmentSelf1297["__typename"]
  | FragmentSelf1297["typenameHint"] | FragmentToken1295 | FragmentToken1296;
