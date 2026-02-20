import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1686 } from "./fragment1686";
import type { FragmentToken1687 } from "./fragment1687";

export const FRAGMENT_1688 = gql(`
  fragment Fragment1688 on Member07 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_07
    memberCount_07
    memberMetric_07
  }
`);

type FragmentResult1688 = ResultOf<typeof FRAGMENT_1688>;
type FragmentSelf1688 = NonNullable<FragmentResult1688>;

export type FragmentToken1688 =
  | FragmentSelf1688["__typename"]
  | FragmentSelf1688["typenameHint"] | FragmentToken1686 | FragmentToken1687;
