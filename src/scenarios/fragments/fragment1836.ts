import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1834 } from "./fragment1834";
import type { FragmentToken1835 } from "./fragment1835";

export const FRAGMENT_1836 = gql(`
  fragment Fragment1836 on Member155 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_155
    memberCount_155
    memberMetric_155
  }
`);

type FragmentResult1836 = ResultOf<typeof FRAGMENT_1836>;
type FragmentSelf1836 = NonNullable<FragmentResult1836>;

export type FragmentToken1836 =
  | FragmentSelf1836["__typename"]
  | FragmentSelf1836["typenameHint"] | FragmentToken1834 | FragmentToken1835;
