import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1496 } from "./fragment1496";
import type { FragmentToken1497 } from "./fragment1497";

export const FRAGMENT_1498 = gql(`
  fragment Fragment1498 on Member97 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_97
    memberCount_97
    memberMetric_97
  }
`);

type FragmentResult1498 = ResultOf<typeof FRAGMENT_1498>;
type FragmentSelf1498 = NonNullable<FragmentResult1498>;

export type FragmentToken1498 =
  | FragmentSelf1498["__typename"]
  | FragmentSelf1498["typenameHint"] | FragmentToken1496 | FragmentToken1497;
