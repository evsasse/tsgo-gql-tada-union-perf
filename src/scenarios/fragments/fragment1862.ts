import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1860 } from "./fragment1860";
import type { FragmentToken1861 } from "./fragment1861";

export const FRAGMENT_1862 = gql(`
  fragment Fragment1862 on Member181 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_181
    memberCount_181
    memberMetric_181
  }
`);

type FragmentResult1862 = ResultOf<typeof FRAGMENT_1862>;
type FragmentSelf1862 = NonNullable<FragmentResult1862>;

export type FragmentToken1862 =
  | FragmentSelf1862["__typename"]
  | FragmentSelf1862["typenameHint"] | FragmentToken1860 | FragmentToken1861;
