import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1043 } from "./fragment1043";
import type { FragmentToken1044 } from "./fragment1044";

export const FRAGMENT_1045 = gql(`
  fragment Fragment1045 on Member204 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_204
    memberCount_204
    memberMetric_204
  }
`);

type FragmentResult1045 = ResultOf<typeof FRAGMENT_1045>;
type FragmentSelf1045 = NonNullable<FragmentResult1045>;

export type FragmentToken1045 =
  | FragmentSelf1045["__typename"]
  | FragmentSelf1045["typenameHint"] | FragmentToken1043 | FragmentToken1044;
