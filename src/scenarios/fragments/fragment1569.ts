import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1567 } from "./fragment1567";
import type { FragmentToken1568 } from "./fragment1568";

export const FRAGMENT_1569 = gql(`
  fragment Fragment1569 on Member168 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_168
    memberCount_168
    memberMetric_168
  }
`);

type FragmentResult1569 = ResultOf<typeof FRAGMENT_1569>;
type FragmentSelf1569 = NonNullable<FragmentResult1569>;

export type FragmentToken1569 =
  | FragmentSelf1569["__typename"]
  | FragmentSelf1569["typenameHint"] | FragmentToken1567 | FragmentToken1568;
