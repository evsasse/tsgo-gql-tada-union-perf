import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1869 } from "./fragment1869";
import type { FragmentToken1870 } from "./fragment1870";

export const FRAGMENT_1871 = gql(`
  fragment Fragment1871 on Member190 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_190
    memberCount_190
    memberMetric_190
  }
`);

type FragmentResult1871 = ResultOf<typeof FRAGMENT_1871>;
type FragmentSelf1871 = NonNullable<FragmentResult1871>;

export type FragmentToken1871 =
  | FragmentSelf1871["__typename"]
  | FragmentSelf1871["typenameHint"] | FragmentToken1869 | FragmentToken1870;
