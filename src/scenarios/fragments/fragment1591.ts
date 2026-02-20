import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1589 } from "./fragment1589";
import type { FragmentToken1590 } from "./fragment1590";

export const FRAGMENT_1591 = gql(`
  fragment Fragment1591 on Member190 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_190
    memberCount_190
    memberMetric_190
  }
`);

type FragmentResult1591 = ResultOf<typeof FRAGMENT_1591>;
type FragmentSelf1591 = NonNullable<FragmentResult1591>;

export type FragmentToken1591 =
  | FragmentSelf1591["__typename"]
  | FragmentSelf1591["typenameHint"] | FragmentToken1589 | FragmentToken1590;
