import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1252 } from "./fragment1252";
import type { FragmentToken1253 } from "./fragment1253";

export const FRAGMENT_1254 = gql(`
  fragment Fragment1254 on Member133 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_133
    memberCount_133
    memberMetric_133
  }
`);

type FragmentResult1254 = ResultOf<typeof FRAGMENT_1254>;
type FragmentSelf1254 = NonNullable<FragmentResult1254>;

export type FragmentToken1254 =
  | FragmentSelf1254["__typename"]
  | FragmentSelf1254["typenameHint"] | FragmentToken1252 | FragmentToken1253;
