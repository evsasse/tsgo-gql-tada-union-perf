import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1791 } from "./fragment1791";
import type { FragmentToken1792 } from "./fragment1792";

export const FRAGMENT_1793 = gql(`
  fragment Fragment1793 on Member112 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_112
    memberCount_112
    memberMetric_112
  }
`);

type FragmentResult1793 = ResultOf<typeof FRAGMENT_1793>;
type FragmentSelf1793 = NonNullable<FragmentResult1793>;

export type FragmentToken1793 =
  | FragmentSelf1793["__typename"]
  | FragmentSelf1793["typenameHint"] | FragmentToken1791 | FragmentToken1792;
