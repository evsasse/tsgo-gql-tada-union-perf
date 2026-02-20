import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1498 } from "./fragment1498";
import type { FragmentToken1499 } from "./fragment1499";

export const FRAGMENT_1500 = gql(`
  fragment Fragment1500 on Member99 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_99
    memberCount_99
    memberMetric_99
  }
`);

type FragmentResult1500 = ResultOf<typeof FRAGMENT_1500>;
type FragmentSelf1500 = NonNullable<FragmentResult1500>;

export type FragmentToken1500 =
  | FragmentSelf1500["__typename"]
  | FragmentSelf1500["typenameHint"] | FragmentToken1498 | FragmentToken1499;
