import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1657 } from "./fragment1657";
import type { FragmentToken1658 } from "./fragment1658";

export const FRAGMENT_1659 = gql(`
  fragment Fragment1659 on Member258 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_258
    memberCount_258
    memberMetric_258
  }
`);

type FragmentResult1659 = ResultOf<typeof FRAGMENT_1659>;
type FragmentSelf1659 = NonNullable<FragmentResult1659>;

export type FragmentToken1659 =
  | FragmentSelf1659["__typename"]
  | FragmentSelf1659["typenameHint"] | FragmentToken1657 | FragmentToken1658;
