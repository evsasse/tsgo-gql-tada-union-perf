import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1769 } from "./fragment1769";
import type { FragmentToken1770 } from "./fragment1770";

export const FRAGMENT_1771 = gql(`
  fragment Fragment1771 on Member90 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_90
    memberCount_90
    memberMetric_90
  }
`);

type FragmentResult1771 = ResultOf<typeof FRAGMENT_1771>;
type FragmentSelf1771 = NonNullable<FragmentResult1771>;

export type FragmentToken1771 =
  | FragmentSelf1771["__typename"]
  | FragmentSelf1771["typenameHint"] | FragmentToken1769 | FragmentToken1770;
