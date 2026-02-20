import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1287 } from "./fragment1287";
import type { FragmentToken1288 } from "./fragment1288";

export const FRAGMENT_1289 = gql(`
  fragment Fragment1289 on Member168 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_168
    memberCount_168
    memberMetric_168
  }
`);

type FragmentResult1289 = ResultOf<typeof FRAGMENT_1289>;
type FragmentSelf1289 = NonNullable<FragmentResult1289>;

export type FragmentToken1289 =
  | FragmentSelf1289["__typename"]
  | FragmentSelf1289["typenameHint"] | FragmentToken1287 | FragmentToken1288;
