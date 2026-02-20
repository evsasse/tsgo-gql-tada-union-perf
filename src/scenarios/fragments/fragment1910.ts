import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1908 } from "./fragment1908";
import type { FragmentToken1909 } from "./fragment1909";

export const FRAGMENT_1910 = gql(`
  fragment Fragment1910 on Member229 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_229
    memberCount_229
    memberMetric_229
  }
`);

type FragmentResult1910 = ResultOf<typeof FRAGMENT_1910>;
type FragmentSelf1910 = NonNullable<FragmentResult1910>;

export type FragmentToken1910 =
  | FragmentSelf1910["__typename"]
  | FragmentSelf1910["typenameHint"] | FragmentToken1908 | FragmentToken1909;
