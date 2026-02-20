import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1960 } from "./fragment1960";
import type { FragmentToken1961 } from "./fragment1961";

export const FRAGMENT_1962 = gql(`
  fragment Fragment1962 on Member01 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_01
    memberCount_01
    memberMetric_01
  }
`);

type FragmentResult1962 = ResultOf<typeof FRAGMENT_1962>;
type FragmentSelf1962 = NonNullable<FragmentResult1962>;

export type FragmentToken1962 =
  | FragmentSelf1962["__typename"]
  | FragmentSelf1962["typenameHint"] | FragmentToken1960 | FragmentToken1961;
