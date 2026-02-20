import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1780 } from "./fragment1780";
import type { FragmentToken1781 } from "./fragment1781";

export const FRAGMENT_1782 = gql(`
  fragment Fragment1782 on Member101 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_101
    memberCount_101
    memberMetric_101
  }
`);

type FragmentResult1782 = ResultOf<typeof FRAGMENT_1782>;
type FragmentSelf1782 = NonNullable<FragmentResult1782>;

export type FragmentToken1782 =
  | FragmentSelf1782["__typename"]
  | FragmentSelf1782["typenameHint"] | FragmentToken1780 | FragmentToken1781;
