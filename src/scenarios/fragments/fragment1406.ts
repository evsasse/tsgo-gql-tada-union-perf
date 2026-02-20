import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1404 } from "./fragment1404";
import type { FragmentToken1405 } from "./fragment1405";

export const FRAGMENT_1406 = gql(`
  fragment Fragment1406 on Member05 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_05
    memberCount_05
    memberMetric_05
  }
`);

type FragmentResult1406 = ResultOf<typeof FRAGMENT_1406>;
type FragmentSelf1406 = NonNullable<FragmentResult1406>;

export type FragmentToken1406 =
  | FragmentSelf1406["__typename"]
  | FragmentSelf1406["typenameHint"] | FragmentToken1404 | FragmentToken1405;
