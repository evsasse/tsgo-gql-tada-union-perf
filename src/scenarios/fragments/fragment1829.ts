import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1827 } from "./fragment1827";
import type { FragmentToken1828 } from "./fragment1828";

export const FRAGMENT_1829 = gql(`
  fragment Fragment1829 on Member148 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_148
    memberCount_148
    memberMetric_148
  }
`);

type FragmentResult1829 = ResultOf<typeof FRAGMENT_1829>;
type FragmentSelf1829 = NonNullable<FragmentResult1829>;

export type FragmentToken1829 =
  | FragmentSelf1829["__typename"]
  | FragmentSelf1829["typenameHint"] | FragmentToken1827 | FragmentToken1828;
