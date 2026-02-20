import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1958 } from "./fragment1958";
import type { FragmentToken1959 } from "./fragment1959";

export const FRAGMENT_1960 = gql(`
  fragment Fragment1960 on Member279 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_279
    memberCount_279
    memberMetric_279
  }
`);

type FragmentResult1960 = ResultOf<typeof FRAGMENT_1960>;
type FragmentSelf1960 = NonNullable<FragmentResult1960>;

export type FragmentToken1960 =
  | FragmentSelf1960["__typename"]
  | FragmentSelf1960["typenameHint"] | FragmentToken1958 | FragmentToken1959;
