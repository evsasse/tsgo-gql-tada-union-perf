import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1928 } from "./fragment1928";
import type { FragmentToken1929 } from "./fragment1929";

export const FRAGMENT_1930 = gql(`
  fragment Fragment1930 on Member249 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_249
    memberCount_249
    memberMetric_249
  }
`);

type FragmentResult1930 = ResultOf<typeof FRAGMENT_1930>;
type FragmentSelf1930 = NonNullable<FragmentResult1930>;

export type FragmentToken1930 =
  | FragmentSelf1930["__typename"]
  | FragmentSelf1930["typenameHint"] | FragmentToken1928 | FragmentToken1929;
