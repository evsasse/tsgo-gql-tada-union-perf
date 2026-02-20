import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1284 } from "./fragment1284";
import type { FragmentToken1285 } from "./fragment1285";

export const FRAGMENT_1286 = gql(`
  fragment Fragment1286 on Member165 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_165
    memberCount_165
    memberMetric_165
  }
`);

type FragmentResult1286 = ResultOf<typeof FRAGMENT_1286>;
type FragmentSelf1286 = NonNullable<FragmentResult1286>;

export type FragmentToken1286 =
  | FragmentSelf1286["__typename"]
  | FragmentSelf1286["typenameHint"] | FragmentToken1284 | FragmentToken1285;
