import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1932 } from "./fragment1932";
import type { FragmentToken1933 } from "./fragment1933";

export const FRAGMENT_1934 = gql(`
  fragment Fragment1934 on Member253 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_253
    memberCount_253
    memberMetric_253
  }
`);

type FragmentResult1934 = ResultOf<typeof FRAGMENT_1934>;
type FragmentSelf1934 = NonNullable<FragmentResult1934>;

export type FragmentToken1934 =
  | FragmentSelf1934["__typename"]
  | FragmentSelf1934["typenameHint"] | FragmentToken1932 | FragmentToken1933;
