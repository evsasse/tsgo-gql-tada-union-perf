import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1783 } from "./fragment1783";
import type { FragmentToken1784 } from "./fragment1784";

export const FRAGMENT_1785 = gql(`
  fragment Fragment1785 on Member104 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_104
    memberCount_104
    memberMetric_104
  }
`);

type FragmentResult1785 = ResultOf<typeof FRAGMENT_1785>;
type FragmentSelf1785 = NonNullable<FragmentResult1785>;

export type FragmentToken1785 =
  | FragmentSelf1785["__typename"]
  | FragmentSelf1785["typenameHint"] | FragmentToken1783 | FragmentToken1784;
