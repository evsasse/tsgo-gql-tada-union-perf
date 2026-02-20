import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1362 } from "./fragment1362";
import type { FragmentToken1363 } from "./fragment1363";

export const FRAGMENT_1364 = gql(`
  fragment Fragment1364 on Member243 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_243
    memberCount_243
    memberMetric_243
  }
`);

type FragmentResult1364 = ResultOf<typeof FRAGMENT_1364>;
type FragmentSelf1364 = NonNullable<FragmentResult1364>;

export type FragmentToken1364 =
  | FragmentSelf1364["__typename"]
  | FragmentSelf1364["typenameHint"] | FragmentToken1362 | FragmentToken1363;
