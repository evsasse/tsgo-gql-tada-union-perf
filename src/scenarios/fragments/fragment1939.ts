import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1937 } from "./fragment1937";
import type { FragmentToken1938 } from "./fragment1938";

export const FRAGMENT_1939 = gql(`
  fragment Fragment1939 on Member258 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_258
    memberCount_258
    memberMetric_258
  }
`);

type FragmentResult1939 = ResultOf<typeof FRAGMENT_1939>;
type FragmentSelf1939 = NonNullable<FragmentResult1939>;

export type FragmentToken1939 =
  | FragmentSelf1939["__typename"]
  | FragmentSelf1939["typenameHint"] | FragmentToken1937 | FragmentToken1938;
