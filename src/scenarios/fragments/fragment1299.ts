import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1297 } from "./fragment1297";
import type { FragmentToken1298 } from "./fragment1298";

export const FRAGMENT_1299 = gql(`
  fragment Fragment1299 on Member178 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_178
    memberCount_178
    memberMetric_178
  }
`);

type FragmentResult1299 = ResultOf<typeof FRAGMENT_1299>;
type FragmentSelf1299 = NonNullable<FragmentResult1299>;

export type FragmentToken1299 =
  | FragmentSelf1299["__typename"]
  | FragmentSelf1299["typenameHint"] | FragmentToken1297 | FragmentToken1298;
