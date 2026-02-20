import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1688 } from "./fragment1688";
import type { FragmentToken1689 } from "./fragment1689";

export const FRAGMENT_1690 = gql(`
  fragment Fragment1690 on Member09 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_09
    memberCount_09
    memberMetric_09
  }
`);

type FragmentResult1690 = ResultOf<typeof FRAGMENT_1690>;
type FragmentSelf1690 = NonNullable<FragmentResult1690>;

export type FragmentToken1690 =
  | FragmentSelf1690["__typename"]
  | FragmentSelf1690["typenameHint"] | FragmentToken1688 | FragmentToken1689;
