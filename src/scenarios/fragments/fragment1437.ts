import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1435 } from "./fragment1435";
import type { FragmentToken1436 } from "./fragment1436";

export const FRAGMENT_1437 = gql(`
  fragment Fragment1437 on Member36 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_36
    memberCount_36
    memberMetric_36
  }
`);

type FragmentResult1437 = ResultOf<typeof FRAGMENT_1437>;
type FragmentSelf1437 = NonNullable<FragmentResult1437>;

export type FragmentToken1437 =
  | FragmentSelf1437["__typename"]
  | FragmentSelf1437["typenameHint"] | FragmentToken1435 | FragmentToken1436;
