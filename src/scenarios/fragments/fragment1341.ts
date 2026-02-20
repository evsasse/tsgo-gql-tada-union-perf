import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1339 } from "./fragment1339";
import type { FragmentToken1340 } from "./fragment1340";

export const FRAGMENT_1341 = gql(`
  fragment Fragment1341 on Member220 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_220
    memberCount_220
    memberMetric_220
  }
`);

type FragmentResult1341 = ResultOf<typeof FRAGMENT_1341>;
type FragmentSelf1341 = NonNullable<FragmentResult1341>;

export type FragmentToken1341 =
  | FragmentSelf1341["__typename"]
  | FragmentSelf1341["typenameHint"] | FragmentToken1339 | FragmentToken1340;
