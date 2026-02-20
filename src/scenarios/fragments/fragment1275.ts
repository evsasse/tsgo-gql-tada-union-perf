import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1273 } from "./fragment1273";
import type { FragmentToken1274 } from "./fragment1274";

export const FRAGMENT_1275 = gql(`
  fragment Fragment1275 on Member154 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_154
    memberCount_154
    memberMetric_154
  }
`);

type FragmentResult1275 = ResultOf<typeof FRAGMENT_1275>;
type FragmentSelf1275 = NonNullable<FragmentResult1275>;

export type FragmentToken1275 =
  | FragmentSelf1275["__typename"]
  | FragmentSelf1275["typenameHint"] | FragmentToken1273 | FragmentToken1274;
