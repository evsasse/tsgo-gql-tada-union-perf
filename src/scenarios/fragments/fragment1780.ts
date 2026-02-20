import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1778 } from "./fragment1778";
import type { FragmentToken1779 } from "./fragment1779";

export const FRAGMENT_1780 = gql(`
  fragment Fragment1780 on Member99 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_99
    memberCount_99
    memberMetric_99
  }
`);

type FragmentResult1780 = ResultOf<typeof FRAGMENT_1780>;
type FragmentSelf1780 = NonNullable<FragmentResult1780>;

export type FragmentToken1780 =
  | FragmentSelf1780["__typename"]
  | FragmentSelf1780["typenameHint"] | FragmentToken1778 | FragmentToken1779;
