import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1413 } from "./fragment1413";
import type { FragmentToken1414 } from "./fragment1414";

export const FRAGMENT_1415 = gql(`
  fragment Fragment1415 on Member14 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_14
    memberCount_14
    memberMetric_14
  }
`);

type FragmentResult1415 = ResultOf<typeof FRAGMENT_1415>;
type FragmentSelf1415 = NonNullable<FragmentResult1415>;

export type FragmentToken1415 =
  | FragmentSelf1415["__typename"]
  | FragmentSelf1415["typenameHint"] | FragmentToken1413 | FragmentToken1414;
