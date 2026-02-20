import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1038 } from "./fragment1038";
import type { FragmentToken1039 } from "./fragment1039";

export const FRAGMENT_1040 = gql(`
  fragment Fragment1040 on Member199 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_199
    memberCount_199
    memberMetric_199
  }
`);

type FragmentResult1040 = ResultOf<typeof FRAGMENT_1040>;
type FragmentSelf1040 = NonNullable<FragmentResult1040>;

export type FragmentToken1040 =
  | FragmentSelf1040["__typename"]
  | FragmentSelf1040["typenameHint"] | FragmentToken1038 | FragmentToken1039;
