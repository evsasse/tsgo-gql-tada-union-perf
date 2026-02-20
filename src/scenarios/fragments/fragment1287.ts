import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1285 } from "./fragment1285";
import type { FragmentToken1286 } from "./fragment1286";

export const FRAGMENT_1287 = gql(`
  fragment Fragment1287 on Member166 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_166
    memberCount_166
    memberMetric_166
  }
`);

type FragmentResult1287 = ResultOf<typeof FRAGMENT_1287>;
type FragmentSelf1287 = NonNullable<FragmentResult1287>;

export type FragmentToken1287 =
  | FragmentSelf1287["__typename"]
  | FragmentSelf1287["typenameHint"] | FragmentToken1285 | FragmentToken1286;
