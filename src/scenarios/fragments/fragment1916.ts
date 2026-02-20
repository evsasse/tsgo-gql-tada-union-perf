import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1914 } from "./fragment1914";
import type { FragmentToken1915 } from "./fragment1915";

export const FRAGMENT_1916 = gql(`
  fragment Fragment1916 on Member235 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_235
    memberCount_235
    memberMetric_235
  }
`);

type FragmentResult1916 = ResultOf<typeof FRAGMENT_1916>;
type FragmentSelf1916 = NonNullable<FragmentResult1916>;

export type FragmentToken1916 =
  | FragmentSelf1916["__typename"]
  | FragmentSelf1916["typenameHint"] | FragmentToken1914 | FragmentToken1915;
