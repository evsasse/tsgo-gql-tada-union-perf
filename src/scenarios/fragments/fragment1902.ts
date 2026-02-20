import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1900 } from "./fragment1900";
import type { FragmentToken1901 } from "./fragment1901";

export const FRAGMENT_1902 = gql(`
  fragment Fragment1902 on Member221 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_221
    memberCount_221
    memberMetric_221
  }
`);

type FragmentResult1902 = ResultOf<typeof FRAGMENT_1902>;
type FragmentSelf1902 = NonNullable<FragmentResult1902>;

export type FragmentToken1902 =
  | FragmentSelf1902["__typename"]
  | FragmentSelf1902["typenameHint"] | FragmentToken1900 | FragmentToken1901;
