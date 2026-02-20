import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1318 } from "./fragment1318";
import type { FragmentToken1319 } from "./fragment1319";

export const FRAGMENT_1320 = gql(`
  fragment Fragment1320 on Member199 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_199
    memberCount_199
    memberMetric_199
  }
`);

type FragmentResult1320 = ResultOf<typeof FRAGMENT_1320>;
type FragmentSelf1320 = NonNullable<FragmentResult1320>;

export type FragmentToken1320 =
  | FragmentSelf1320["__typename"]
  | FragmentSelf1320["typenameHint"] | FragmentToken1318 | FragmentToken1319;
