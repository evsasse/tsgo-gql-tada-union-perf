import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1861 } from "./fragment1861";
import type { FragmentToken1862 } from "./fragment1862";

export const FRAGMENT_1863 = gql(`
  fragment Fragment1863 on Member182 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_182
    memberCount_182
    memberMetric_182
  }
`);

type FragmentResult1863 = ResultOf<typeof FRAGMENT_1863>;
type FragmentSelf1863 = NonNullable<FragmentResult1863>;

export type FragmentToken1863 =
  | FragmentSelf1863["__typename"]
  | FragmentSelf1863["typenameHint"] | FragmentToken1861 | FragmentToken1862;
