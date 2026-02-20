import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1434 } from "./fragment1434";
import type { FragmentToken1435 } from "./fragment1435";

export const FRAGMENT_1436 = gql(`
  fragment Fragment1436 on Member35 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_35
    memberCount_35
    memberMetric_35
  }
`);

type FragmentResult1436 = ResultOf<typeof FRAGMENT_1436>;
type FragmentSelf1436 = NonNullable<FragmentResult1436>;

export type FragmentToken1436 =
  | FragmentSelf1436["__typename"]
  | FragmentSelf1436["typenameHint"] | FragmentToken1434 | FragmentToken1435;
