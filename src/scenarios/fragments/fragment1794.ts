import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1792 } from "./fragment1792";
import type { FragmentToken1793 } from "./fragment1793";

export const FRAGMENT_1794 = gql(`
  fragment Fragment1794 on Member113 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_113
    memberCount_113
    memberMetric_113
  }
`);

type FragmentResult1794 = ResultOf<typeof FRAGMENT_1794>;
type FragmentSelf1794 = NonNullable<FragmentResult1794>;

export type FragmentToken1794 =
  | FragmentSelf1794["__typename"]
  | FragmentSelf1794["typenameHint"] | FragmentToken1792 | FragmentToken1793;
