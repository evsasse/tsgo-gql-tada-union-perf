import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1844 } from "./fragment1844";
import type { FragmentToken1845 } from "./fragment1845";

export const FRAGMENT_1846 = gql(`
  fragment Fragment1846 on Member165 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_165
    memberCount_165
    memberMetric_165
  }
`);

type FragmentResult1846 = ResultOf<typeof FRAGMENT_1846>;
type FragmentSelf1846 = NonNullable<FragmentResult1846>;

export type FragmentToken1846 =
  | FragmentSelf1846["__typename"]
  | FragmentSelf1846["typenameHint"] | FragmentToken1844 | FragmentToken1845;
