import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1862 } from "./fragment1862";
import type { FragmentToken1863 } from "./fragment1863";

export const FRAGMENT_1864 = gql(`
  fragment Fragment1864 on Member183 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_183
    memberCount_183
    memberMetric_183
  }
`);

type FragmentResult1864 = ResultOf<typeof FRAGMENT_1864>;
type FragmentSelf1864 = NonNullable<FragmentResult1864>;

export type FragmentToken1864 =
  | FragmentSelf1864["__typename"]
  | FragmentSelf1864["typenameHint"] | FragmentToken1862 | FragmentToken1863;
