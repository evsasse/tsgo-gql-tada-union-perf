import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1689 } from "./fragment1689";
import type { FragmentToken1690 } from "./fragment1690";

export const FRAGMENT_1691 = gql(`
  fragment Fragment1691 on Member10 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_10
    memberCount_10
    memberMetric_10
  }
`);

type FragmentResult1691 = ResultOf<typeof FRAGMENT_1691>;
type FragmentSelf1691 = NonNullable<FragmentResult1691>;

export type FragmentToken1691 =
  | FragmentSelf1691["__typename"]
  | FragmentSelf1691["typenameHint"] | FragmentToken1689 | FragmentToken1690;
