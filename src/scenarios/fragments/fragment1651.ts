import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1649 } from "./fragment1649";
import type { FragmentToken1650 } from "./fragment1650";

export const FRAGMENT_1651 = gql(`
  fragment Fragment1651 on Member250 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_250
    memberCount_250
    memberMetric_250
  }
`);

type FragmentResult1651 = ResultOf<typeof FRAGMENT_1651>;
type FragmentSelf1651 = NonNullable<FragmentResult1651>;

export type FragmentToken1651 =
  | FragmentSelf1651["__typename"]
  | FragmentSelf1651["typenameHint"] | FragmentToken1649 | FragmentToken1650;
