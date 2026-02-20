import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1109 } from "./fragment1109";
import type { FragmentToken1110 } from "./fragment1110";

export const FRAGMENT_1111 = gql(`
  fragment Fragment1111 on Member270 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_270
    memberCount_270
    memberMetric_270
  }
`);

type FragmentResult1111 = ResultOf<typeof FRAGMENT_1111>;
type FragmentSelf1111 = NonNullable<FragmentResult1111>;

export type FragmentToken1111 =
  | FragmentSelf1111["__typename"]
  | FragmentSelf1111["typenameHint"] | FragmentToken1109 | FragmentToken1110;
