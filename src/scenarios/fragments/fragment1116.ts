import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1114 } from "./fragment1114";
import type { FragmentToken1115 } from "./fragment1115";

export const FRAGMENT_1116 = gql(`
  fragment Fragment1116 on Member275 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_275
    memberCount_275
    memberMetric_275
  }
`);

type FragmentResult1116 = ResultOf<typeof FRAGMENT_1116>;
type FragmentSelf1116 = NonNullable<FragmentResult1116>;

export type FragmentToken1116 =
  | FragmentSelf1116["__typename"]
  | FragmentSelf1116["typenameHint"] | FragmentToken1114 | FragmentToken1115;
