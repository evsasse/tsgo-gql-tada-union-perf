import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1247 } from "./fragment1247";
import type { FragmentToken1248 } from "./fragment1248";

export const FRAGMENT_1249 = gql(`
  fragment Fragment1249 on Member128 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_128
    memberCount_128
    memberMetric_128
  }
`);

type FragmentResult1249 = ResultOf<typeof FRAGMENT_1249>;
type FragmentSelf1249 = NonNullable<FragmentResult1249>;

export type FragmentToken1249 =
  | FragmentSelf1249["__typename"]
  | FragmentSelf1249["typenameHint"] | FragmentToken1247 | FragmentToken1248;
