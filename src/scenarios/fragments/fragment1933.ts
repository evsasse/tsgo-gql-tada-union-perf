import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1931 } from "./fragment1931";
import type { FragmentToken1932 } from "./fragment1932";

export const FRAGMENT_1933 = gql(`
  fragment Fragment1933 on Member252 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_252
    memberCount_252
    memberMetric_252
  }
`);

type FragmentResult1933 = ResultOf<typeof FRAGMENT_1933>;
type FragmentSelf1933 = NonNullable<FragmentResult1933>;

export type FragmentToken1933 =
  | FragmentSelf1933["__typename"]
  | FragmentSelf1933["typenameHint"] | FragmentToken1931 | FragmentToken1932;
