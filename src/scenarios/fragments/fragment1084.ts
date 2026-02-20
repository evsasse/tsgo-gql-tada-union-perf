import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1082 } from "./fragment1082";
import type { FragmentToken1083 } from "./fragment1083";

export const FRAGMENT_1084 = gql(`
  fragment Fragment1084 on Member243 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_243
    memberCount_243
    memberMetric_243
  }
`);

type FragmentResult1084 = ResultOf<typeof FRAGMENT_1084>;
type FragmentSelf1084 = NonNullable<FragmentResult1084>;

export type FragmentToken1084 =
  | FragmentSelf1084["__typename"]
  | FragmentSelf1084["typenameHint"] | FragmentToken1082 | FragmentToken1083;
