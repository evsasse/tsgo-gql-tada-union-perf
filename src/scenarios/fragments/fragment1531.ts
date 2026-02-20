import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1529 } from "./fragment1529";
import type { FragmentToken1530 } from "./fragment1530";

export const FRAGMENT_1531 = gql(`
  fragment Fragment1531 on Member130 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_130
    memberCount_130
    memberMetric_130
  }
`);

type FragmentResult1531 = ResultOf<typeof FRAGMENT_1531>;
type FragmentSelf1531 = NonNullable<FragmentResult1531>;

export type FragmentToken1531 =
  | FragmentSelf1531["__typename"]
  | FragmentSelf1531["typenameHint"] | FragmentToken1529 | FragmentToken1530;
