import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1801 } from "./fragment1801";
import type { FragmentToken1802 } from "./fragment1802";

export const FRAGMENT_1803 = gql(`
  fragment Fragment1803 on Member122 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_122
    memberCount_122
    memberMetric_122
  }
`);

type FragmentResult1803 = ResultOf<typeof FRAGMENT_1803>;
type FragmentSelf1803 = NonNullable<FragmentResult1803>;

export type FragmentToken1803 =
  | FragmentSelf1803["__typename"]
  | FragmentSelf1803["typenameHint"] | FragmentToken1801 | FragmentToken1802;
