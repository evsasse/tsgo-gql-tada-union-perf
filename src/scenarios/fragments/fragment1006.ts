import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1004 } from "./fragment1004";
import type { FragmentToken1005 } from "./fragment1005";

export const FRAGMENT_1006 = gql(`
  fragment Fragment1006 on Member165 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_165
    memberCount_165
    memberMetric_165
  }
`);

type FragmentResult1006 = ResultOf<typeof FRAGMENT_1006>;
type FragmentSelf1006 = NonNullable<FragmentResult1006>;

export type FragmentToken1006 =
  | FragmentSelf1006["__typename"]
  | FragmentSelf1006["typenameHint"] | FragmentToken1004 | FragmentToken1005;
