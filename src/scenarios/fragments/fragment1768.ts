import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1766 } from "./fragment1766";
import type { FragmentToken1767 } from "./fragment1767";

export const FRAGMENT_1768 = gql(`
  fragment Fragment1768 on Member87 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_87
    memberCount_87
    memberMetric_87
  }
`);

type FragmentResult1768 = ResultOf<typeof FRAGMENT_1768>;
type FragmentSelf1768 = NonNullable<FragmentResult1768>;

export type FragmentToken1768 =
  | FragmentSelf1768["__typename"]
  | FragmentSelf1768["typenameHint"] | FragmentToken1766 | FragmentToken1767;
