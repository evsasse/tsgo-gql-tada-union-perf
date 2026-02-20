import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1271 } from "./fragment1271";
import type { FragmentToken1272 } from "./fragment1272";

export const FRAGMENT_1273 = gql(`
  fragment Fragment1273 on Member152 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_152
    memberCount_152
    memberMetric_152
  }
`);

type FragmentResult1273 = ResultOf<typeof FRAGMENT_1273>;
type FragmentSelf1273 = NonNullable<FragmentResult1273>;

export type FragmentToken1273 =
  | FragmentSelf1273["__typename"]
  | FragmentSelf1273["typenameHint"] | FragmentToken1271 | FragmentToken1272;
