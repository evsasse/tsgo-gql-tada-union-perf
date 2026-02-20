import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1016 } from "./fragment1016";
import type { FragmentToken1017 } from "./fragment1017";

export const FRAGMENT_1018 = gql(`
  fragment Fragment1018 on Member177 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_177
    memberCount_177
    memberMetric_177
  }
`);

type FragmentResult1018 = ResultOf<typeof FRAGMENT_1018>;
type FragmentSelf1018 = NonNullable<FragmentResult1018>;

export type FragmentToken1018 =
  | FragmentSelf1018["__typename"]
  | FragmentSelf1018["typenameHint"] | FragmentToken1016 | FragmentToken1017;
