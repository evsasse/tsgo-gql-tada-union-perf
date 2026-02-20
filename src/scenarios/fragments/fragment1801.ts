import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1799 } from "./fragment1799";
import type { FragmentToken1800 } from "./fragment1800";

export const FRAGMENT_1801 = gql(`
  fragment Fragment1801 on Member120 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_120
    memberCount_120
    memberMetric_120
  }
`);

type FragmentResult1801 = ResultOf<typeof FRAGMENT_1801>;
type FragmentSelf1801 = NonNullable<FragmentResult1801>;

export type FragmentToken1801 =
  | FragmentSelf1801["__typename"]
  | FragmentSelf1801["typenameHint"] | FragmentToken1799 | FragmentToken1800;
