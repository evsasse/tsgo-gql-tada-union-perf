import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1336 } from "./fragment1336";
import type { FragmentToken1337 } from "./fragment1337";

export const FRAGMENT_1338 = gql(`
  fragment Fragment1338 on Member217 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_217
    memberCount_217
    memberMetric_217
  }
`);

type FragmentResult1338 = ResultOf<typeof FRAGMENT_1338>;
type FragmentSelf1338 = NonNullable<FragmentResult1338>;

export type FragmentToken1338 =
  | FragmentSelf1338["__typename"]
  | FragmentSelf1338["typenameHint"] | FragmentToken1336 | FragmentToken1337;
