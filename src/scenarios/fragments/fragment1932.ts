import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1930 } from "./fragment1930";
import type { FragmentToken1931 } from "./fragment1931";

export const FRAGMENT_1932 = gql(`
  fragment Fragment1932 on Member251 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_251
    memberCount_251
    memberMetric_251
  }
`);

type FragmentResult1932 = ResultOf<typeof FRAGMENT_1932>;
type FragmentSelf1932 = NonNullable<FragmentResult1932>;

export type FragmentToken1932 =
  | FragmentSelf1932["__typename"]
  | FragmentSelf1932["typenameHint"] | FragmentToken1930 | FragmentToken1931;
