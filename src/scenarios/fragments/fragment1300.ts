import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1298 } from "./fragment1298";
import type { FragmentToken1299 } from "./fragment1299";

export const FRAGMENT_1300 = gql(`
  fragment Fragment1300 on Member179 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_179
    memberCount_179
    memberMetric_179
  }
`);

type FragmentResult1300 = ResultOf<typeof FRAGMENT_1300>;
type FragmentSelf1300 = NonNullable<FragmentResult1300>;

export type FragmentToken1300 =
  | FragmentSelf1300["__typename"]
  | FragmentSelf1300["typenameHint"] | FragmentToken1298 | FragmentToken1299;
