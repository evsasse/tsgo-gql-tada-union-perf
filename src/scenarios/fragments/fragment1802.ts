import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1800 } from "./fragment1800";
import type { FragmentToken1801 } from "./fragment1801";

export const FRAGMENT_1802 = gql(`
  fragment Fragment1802 on Member121 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_121
    memberCount_121
    memberMetric_121
  }
`);

type FragmentResult1802 = ResultOf<typeof FRAGMENT_1802>;
type FragmentSelf1802 = NonNullable<FragmentResult1802>;

export type FragmentToken1802 =
  | FragmentSelf1802["__typename"]
  | FragmentSelf1802["typenameHint"] | FragmentToken1800 | FragmentToken1801;
