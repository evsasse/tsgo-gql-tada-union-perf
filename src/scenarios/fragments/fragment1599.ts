import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1597 } from "./fragment1597";
import type { FragmentToken1598 } from "./fragment1598";

export const FRAGMENT_1599 = gql(`
  fragment Fragment1599 on Member198 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_198
    memberCount_198
    memberMetric_198
  }
`);

type FragmentResult1599 = ResultOf<typeof FRAGMENT_1599>;
type FragmentSelf1599 = NonNullable<FragmentResult1599>;

export type FragmentToken1599 =
  | FragmentSelf1599["__typename"]
  | FragmentSelf1599["typenameHint"] | FragmentToken1597 | FragmentToken1598;
