import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1198 } from "./fragment1198";
import type { FragmentToken1199 } from "./fragment1199";

export const FRAGMENT_1200 = gql(`
  fragment Fragment1200 on Member79 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_79
    memberCount_79
    memberMetric_79
  }
`);

type FragmentResult1200 = ResultOf<typeof FRAGMENT_1200>;
type FragmentSelf1200 = NonNullable<FragmentResult1200>;

export type FragmentToken1200 =
  | FragmentSelf1200["__typename"]
  | FragmentSelf1200["typenameHint"] | FragmentToken1198 | FragmentToken1199;
