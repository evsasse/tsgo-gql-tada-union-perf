import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1251 } from "./fragment1251";
import type { FragmentToken1252 } from "./fragment1252";

export const FRAGMENT_1253 = gql(`
  fragment Fragment1253 on Member132 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_132
    memberCount_132
    memberMetric_132
  }
`);

type FragmentResult1253 = ResultOf<typeof FRAGMENT_1253>;
type FragmentSelf1253 = NonNullable<FragmentResult1253>;

export type FragmentToken1253 =
  | FragmentSelf1253["__typename"]
  | FragmentSelf1253["typenameHint"] | FragmentToken1251 | FragmentToken1252;
