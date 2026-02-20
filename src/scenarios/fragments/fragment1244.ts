import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1242 } from "./fragment1242";
import type { FragmentToken1243 } from "./fragment1243";

export const FRAGMENT_1244 = gql(`
  fragment Fragment1244 on Member123 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_123
    memberCount_123
    memberMetric_123
  }
`);

type FragmentResult1244 = ResultOf<typeof FRAGMENT_1244>;
type FragmentSelf1244 = NonNullable<FragmentResult1244>;

export type FragmentToken1244 =
  | FragmentSelf1244["__typename"]
  | FragmentSelf1244["typenameHint"] | FragmentToken1242 | FragmentToken1243;
