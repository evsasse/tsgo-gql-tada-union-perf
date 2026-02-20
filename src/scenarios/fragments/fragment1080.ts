import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1078 } from "./fragment1078";
import type { FragmentToken1079 } from "./fragment1079";

export const FRAGMENT_1080 = gql(`
  fragment Fragment1080 on Member239 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_239
    memberCount_239
    memberMetric_239
  }
`);

type FragmentResult1080 = ResultOf<typeof FRAGMENT_1080>;
type FragmentSelf1080 = NonNullable<FragmentResult1080>;

export type FragmentToken1080 =
  | FragmentSelf1080["__typename"]
  | FragmentSelf1080["typenameHint"] | FragmentToken1078 | FragmentToken1079;
