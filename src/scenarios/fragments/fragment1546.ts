import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1544 } from "./fragment1544";
import type { FragmentToken1545 } from "./fragment1545";

export const FRAGMENT_1546 = gql(`
  fragment Fragment1546 on Member145 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_145
    memberCount_145
    memberMetric_145
  }
`);

type FragmentResult1546 = ResultOf<typeof FRAGMENT_1546>;
type FragmentSelf1546 = NonNullable<FragmentResult1546>;

export type FragmentToken1546 =
  | FragmentSelf1546["__typename"]
  | FragmentSelf1546["typenameHint"] | FragmentToken1544 | FragmentToken1545;
