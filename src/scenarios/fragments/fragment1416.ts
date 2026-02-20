import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1414 } from "./fragment1414";
import type { FragmentToken1415 } from "./fragment1415";

export const FRAGMENT_1416 = gql(`
  fragment Fragment1416 on Member15 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_15
    memberCount_15
    memberMetric_15
  }
`);

type FragmentResult1416 = ResultOf<typeof FRAGMENT_1416>;
type FragmentSelf1416 = NonNullable<FragmentResult1416>;

export type FragmentToken1416 =
  | FragmentSelf1416["__typename"]
  | FragmentSelf1416["typenameHint"] | FragmentToken1414 | FragmentToken1415;
