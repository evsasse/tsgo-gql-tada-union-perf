import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1044 } from "./fragment1044";
import type { FragmentToken1045 } from "./fragment1045";

export const FRAGMENT_1046 = gql(`
  fragment Fragment1046 on Member205 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_205
    memberCount_205
    memberMetric_205
  }
`);

type FragmentResult1046 = ResultOf<typeof FRAGMENT_1046>;
type FragmentSelf1046 = NonNullable<FragmentResult1046>;

export type FragmentToken1046 =
  | FragmentSelf1046["__typename"]
  | FragmentSelf1046["typenameHint"] | FragmentToken1044 | FragmentToken1045;
