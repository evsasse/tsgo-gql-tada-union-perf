import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1433 } from "./fragment1433";
import type { FragmentToken1434 } from "./fragment1434";

export const FRAGMENT_1435 = gql(`
  fragment Fragment1435 on Member34 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_34
    memberCount_34
    memberMetric_34
  }
`);

type FragmentResult1435 = ResultOf<typeof FRAGMENT_1435>;
type FragmentSelf1435 = NonNullable<FragmentResult1435>;

export type FragmentToken1435 =
  | FragmentSelf1435["__typename"]
  | FragmentSelf1435["typenameHint"] | FragmentToken1433 | FragmentToken1434;
