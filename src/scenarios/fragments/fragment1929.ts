import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1927 } from "./fragment1927";
import type { FragmentToken1928 } from "./fragment1928";

export const FRAGMENT_1929 = gql(`
  fragment Fragment1929 on Member248 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_248
    memberCount_248
    memberMetric_248
  }
`);

type FragmentResult1929 = ResultOf<typeof FRAGMENT_1929>;
type FragmentSelf1929 = NonNullable<FragmentResult1929>;

export type FragmentToken1929 =
  | FragmentSelf1929["__typename"]
  | FragmentSelf1929["typenameHint"] | FragmentToken1927 | FragmentToken1928;
