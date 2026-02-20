import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1915 } from "./fragment1915";
import type { FragmentToken1916 } from "./fragment1916";

export const FRAGMENT_1917 = gql(`
  fragment Fragment1917 on Member236 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_236
    memberCount_236
    memberMetric_236
  }
`);

type FragmentResult1917 = ResultOf<typeof FRAGMENT_1917>;
type FragmentSelf1917 = NonNullable<FragmentResult1917>;

export type FragmentToken1917 =
  | FragmentSelf1917["__typename"]
  | FragmentSelf1917["typenameHint"] | FragmentToken1915 | FragmentToken1916;
