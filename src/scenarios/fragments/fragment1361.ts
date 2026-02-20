import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1359 } from "./fragment1359";
import type { FragmentToken1360 } from "./fragment1360";

export const FRAGMENT_1361 = gql(`
  fragment Fragment1361 on Member240 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_240
    memberCount_240
    memberMetric_240
  }
`);

type FragmentResult1361 = ResultOf<typeof FRAGMENT_1361>;
type FragmentSelf1361 = NonNullable<FragmentResult1361>;

export type FragmentToken1361 =
  | FragmentSelf1361["__typename"]
  | FragmentSelf1361["typenameHint"] | FragmentToken1359 | FragmentToken1360;
