import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1325 } from "./fragment1325";
import type { FragmentToken1326 } from "./fragment1326";

export const FRAGMENT_1327 = gql(`
  fragment Fragment1327 on Member206 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_206
    memberCount_206
    memberMetric_206
  }
`);

type FragmentResult1327 = ResultOf<typeof FRAGMENT_1327>;
type FragmentSelf1327 = NonNullable<FragmentResult1327>;

export type FragmentToken1327 =
  | FragmentSelf1327["__typename"]
  | FragmentSelf1327["typenameHint"] | FragmentToken1325 | FragmentToken1326;
