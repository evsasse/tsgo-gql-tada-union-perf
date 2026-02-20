import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1233 } from "./fragment1233";
import type { FragmentToken1234 } from "./fragment1234";

export const FRAGMENT_1235 = gql(`
  fragment Fragment1235 on Member114 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_114
    memberCount_114
    memberMetric_114
  }
`);

type FragmentResult1235 = ResultOf<typeof FRAGMENT_1235>;
type FragmentSelf1235 = NonNullable<FragmentResult1235>;

export type FragmentToken1235 =
  | FragmentSelf1235["__typename"]
  | FragmentSelf1235["typenameHint"] | FragmentToken1233 | FragmentToken1234;
