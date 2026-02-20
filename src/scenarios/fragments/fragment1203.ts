import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1201 } from "./fragment1201";
import type { FragmentToken1202 } from "./fragment1202";

export const FRAGMENT_1203 = gql(`
  fragment Fragment1203 on Member82 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_82
    memberCount_82
    memberMetric_82
  }
`);

type FragmentResult1203 = ResultOf<typeof FRAGMENT_1203>;
type FragmentSelf1203 = NonNullable<FragmentResult1203>;

export type FragmentToken1203 =
  | FragmentSelf1203["__typename"]
  | FragmentSelf1203["typenameHint"] | FragmentToken1201 | FragmentToken1202;
