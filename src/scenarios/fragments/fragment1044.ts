import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1042 } from "./fragment1042";
import type { FragmentToken1043 } from "./fragment1043";

export const FRAGMENT_1044 = gql(`
  fragment Fragment1044 on Member203 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_203
    memberCount_203
    memberMetric_203
  }
`);

type FragmentResult1044 = ResultOf<typeof FRAGMENT_1044>;
type FragmentSelf1044 = NonNullable<FragmentResult1044>;

export type FragmentToken1044 =
  | FragmentSelf1044["__typename"]
  | FragmentSelf1044["typenameHint"] | FragmentToken1042 | FragmentToken1043;
