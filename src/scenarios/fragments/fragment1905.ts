import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1903 } from "./fragment1903";
import type { FragmentToken1904 } from "./fragment1904";

export const FRAGMENT_1905 = gql(`
  fragment Fragment1905 on Member224 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_224
    memberCount_224
    memberMetric_224
  }
`);

type FragmentResult1905 = ResultOf<typeof FRAGMENT_1905>;
type FragmentSelf1905 = NonNullable<FragmentResult1905>;

export type FragmentToken1905 =
  | FragmentSelf1905["__typename"]
  | FragmentSelf1905["typenameHint"] | FragmentToken1903 | FragmentToken1904;
