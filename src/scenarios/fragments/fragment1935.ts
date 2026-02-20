import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1933 } from "./fragment1933";
import type { FragmentToken1934 } from "./fragment1934";

export const FRAGMENT_1935 = gql(`
  fragment Fragment1935 on Member254 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_254
    memberCount_254
    memberMetric_254
  }
`);

type FragmentResult1935 = ResultOf<typeof FRAGMENT_1935>;
type FragmentSelf1935 = NonNullable<FragmentResult1935>;

export type FragmentToken1935 =
  | FragmentSelf1935["__typename"]
  | FragmentSelf1935["typenameHint"] | FragmentToken1933 | FragmentToken1934;
