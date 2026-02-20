import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1947 } from "./fragment1947";
import type { FragmentToken1948 } from "./fragment1948";

export const FRAGMENT_1949 = gql(`
  fragment Fragment1949 on Member268 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_268
    memberCount_268
    memberMetric_268
  }
`);

type FragmentResult1949 = ResultOf<typeof FRAGMENT_1949>;
type FragmentSelf1949 = NonNullable<FragmentResult1949>;

export type FragmentToken1949 =
  | FragmentSelf1949["__typename"]
  | FragmentSelf1949["typenameHint"] | FragmentToken1947 | FragmentToken1948;
