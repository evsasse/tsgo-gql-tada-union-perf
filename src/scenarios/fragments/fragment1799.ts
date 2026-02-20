import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1797 } from "./fragment1797";
import type { FragmentToken1798 } from "./fragment1798";

export const FRAGMENT_1799 = gql(`
  fragment Fragment1799 on Member118 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_118
    memberCount_118
    memberMetric_118
  }
`);

type FragmentResult1799 = ResultOf<typeof FRAGMENT_1799>;
type FragmentSelf1799 = NonNullable<FragmentResult1799>;

export type FragmentToken1799 =
  | FragmentSelf1799["__typename"]
  | FragmentSelf1799["typenameHint"] | FragmentToken1797 | FragmentToken1798;
