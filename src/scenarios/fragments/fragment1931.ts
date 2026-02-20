import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1929 } from "./fragment1929";
import type { FragmentToken1930 } from "./fragment1930";

export const FRAGMENT_1931 = gql(`
  fragment Fragment1931 on Member250 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_250
    memberCount_250
    memberMetric_250
  }
`);

type FragmentResult1931 = ResultOf<typeof FRAGMENT_1931>;
type FragmentSelf1931 = NonNullable<FragmentResult1931>;

export type FragmentToken1931 =
  | FragmentSelf1931["__typename"]
  | FragmentSelf1931["typenameHint"] | FragmentToken1929 | FragmentToken1930;
