import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1015 } from "./fragment1015";
import type { FragmentToken1016 } from "./fragment1016";

export const FRAGMENT_1017 = gql(`
  fragment Fragment1017 on Member176 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_176
    memberCount_176
    memberMetric_176
  }
`);

type FragmentResult1017 = ResultOf<typeof FRAGMENT_1017>;
type FragmentSelf1017 = NonNullable<FragmentResult1017>;

export type FragmentToken1017 =
  | FragmentSelf1017["__typename"]
  | FragmentSelf1017["typenameHint"] | FragmentToken1015 | FragmentToken1016;
