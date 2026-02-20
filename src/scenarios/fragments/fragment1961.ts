import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1959 } from "./fragment1959";
import type { FragmentToken1960 } from "./fragment1960";

export const FRAGMENT_1961 = gql(`
  fragment Fragment1961 on Member00 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_00
    memberCount_00
    memberMetric_00
  }
`);

type FragmentResult1961 = ResultOf<typeof FRAGMENT_1961>;
type FragmentSelf1961 = NonNullable<FragmentResult1961>;

export type FragmentToken1961 =
  | FragmentSelf1961["__typename"]
  | FragmentSelf1961["typenameHint"] | FragmentToken1959 | FragmentToken1960;
