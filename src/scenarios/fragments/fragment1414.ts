import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1412 } from "./fragment1412";
import type { FragmentToken1413 } from "./fragment1413";

export const FRAGMENT_1414 = gql(`
  fragment Fragment1414 on Member13 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_13
    memberCount_13
    memberMetric_13
  }
`);

type FragmentResult1414 = ResultOf<typeof FRAGMENT_1414>;
type FragmentSelf1414 = NonNullable<FragmentResult1414>;

export type FragmentToken1414 =
  | FragmentSelf1414["__typename"]
  | FragmentSelf1414["typenameHint"] | FragmentToken1412 | FragmentToken1413;
