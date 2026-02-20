import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1602 } from "./fragment1602";
import type { FragmentToken1603 } from "./fragment1603";

export const FRAGMENT_1604 = gql(`
  fragment Fragment1604 on Member203 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_203
    memberCount_203
    memberMetric_203
  }
`);

type FragmentResult1604 = ResultOf<typeof FRAGMENT_1604>;
type FragmentSelf1604 = NonNullable<FragmentResult1604>;

export type FragmentToken1604 =
  | FragmentSelf1604["__typename"]
  | FragmentSelf1604["typenameHint"] | FragmentToken1602 | FragmentToken1603;
