import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1814 } from "./fragment1814";
import type { FragmentToken1815 } from "./fragment1815";

export const FRAGMENT_1816 = gql(`
  fragment Fragment1816 on Member135 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_135
    memberCount_135
    memberMetric_135
  }
`);

type FragmentResult1816 = ResultOf<typeof FRAGMENT_1816>;
type FragmentSelf1816 = NonNullable<FragmentResult1816>;

export type FragmentToken1816 =
  | FragmentSelf1816["__typename"]
  | FragmentSelf1816["typenameHint"] | FragmentToken1814 | FragmentToken1815;
