import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1261 } from "./fragment1261";
import type { FragmentToken1262 } from "./fragment1262";

export const FRAGMENT_1263 = gql(`
  fragment Fragment1263 on Member142 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_142
    memberCount_142
    memberMetric_142
  }
`);

type FragmentResult1263 = ResultOf<typeof FRAGMENT_1263>;
type FragmentSelf1263 = NonNullable<FragmentResult1263>;

export type FragmentToken1263 =
  | FragmentSelf1263["__typename"]
  | FragmentSelf1263["typenameHint"] | FragmentToken1261 | FragmentToken1262;
