import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1494 } from "./fragment1494";
import type { FragmentToken1495 } from "./fragment1495";

export const FRAGMENT_1496 = gql(`
  fragment Fragment1496 on Member95 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_95
    memberCount_95
    memberMetric_95
  }
`);

type FragmentResult1496 = ResultOf<typeof FRAGMENT_1496>;
type FragmentSelf1496 = NonNullable<FragmentResult1496>;

export type FragmentToken1496 =
  | FragmentSelf1496["__typename"]
  | FragmentSelf1496["typenameHint"] | FragmentToken1494 | FragmentToken1495;
