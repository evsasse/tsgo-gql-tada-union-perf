import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1197 } from "./fragment1197";
import type { FragmentToken1198 } from "./fragment1198";

export const FRAGMENT_1199 = gql(`
  fragment Fragment1199 on Member78 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_78
    memberCount_78
    memberMetric_78
  }
`);

type FragmentResult1199 = ResultOf<typeof FRAGMENT_1199>;
type FragmentSelf1199 = NonNullable<FragmentResult1199>;

export type FragmentToken1199 =
  | FragmentSelf1199["__typename"]
  | FragmentSelf1199["typenameHint"] | FragmentToken1197 | FragmentToken1198;
