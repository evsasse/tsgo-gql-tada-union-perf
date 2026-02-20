import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1272 } from "./fragment1272";
import type { FragmentToken1273 } from "./fragment1273";

export const FRAGMENT_1274 = gql(`
  fragment Fragment1274 on Member153 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_153
    memberCount_153
    memberMetric_153
  }
`);

type FragmentResult1274 = ResultOf<typeof FRAGMENT_1274>;
type FragmentSelf1274 = NonNullable<FragmentResult1274>;

export type FragmentToken1274 =
  | FragmentSelf1274["__typename"]
  | FragmentSelf1274["typenameHint"] | FragmentToken1272 | FragmentToken1273;
