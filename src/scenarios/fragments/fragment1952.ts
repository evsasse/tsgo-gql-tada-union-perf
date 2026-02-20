import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1950 } from "./fragment1950";
import type { FragmentToken1951 } from "./fragment1951";

export const FRAGMENT_1952 = gql(`
  fragment Fragment1952 on Member271 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_271
    memberCount_271
    memberMetric_271
  }
`);

type FragmentResult1952 = ResultOf<typeof FRAGMENT_1952>;
type FragmentSelf1952 = NonNullable<FragmentResult1952>;

export type FragmentToken1952 =
  | FragmentSelf1952["__typename"]
  | FragmentSelf1952["typenameHint"] | FragmentToken1950 | FragmentToken1951;
