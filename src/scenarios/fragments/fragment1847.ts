import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1845 } from "./fragment1845";
import type { FragmentToken1846 } from "./fragment1846";

export const FRAGMENT_1847 = gql(`
  fragment Fragment1847 on Member166 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_166
    memberCount_166
    memberMetric_166
  }
`);

type FragmentResult1847 = ResultOf<typeof FRAGMENT_1847>;
type FragmentSelf1847 = NonNullable<FragmentResult1847>;

export type FragmentToken1847 =
  | FragmentSelf1847["__typename"]
  | FragmentSelf1847["typenameHint"] | FragmentToken1845 | FragmentToken1846;
