import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1214 } from "./fragment1214";
import type { FragmentToken1215 } from "./fragment1215";

export const FRAGMENT_1216 = gql(`
  fragment Fragment1216 on Member95 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_95
    memberCount_95
    memberMetric_95
  }
`);

type FragmentResult1216 = ResultOf<typeof FRAGMENT_1216>;
type FragmentSelf1216 = NonNullable<FragmentResult1216>;

export type FragmentToken1216 =
  | FragmentSelf1216["__typename"]
  | FragmentSelf1216["typenameHint"] | FragmentToken1214 | FragmentToken1215;
