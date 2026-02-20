import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1949 } from "./fragment1949";
import type { FragmentToken1950 } from "./fragment1950";

export const FRAGMENT_1951 = gql(`
  fragment Fragment1951 on Member270 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_270
    memberCount_270
    memberMetric_270
  }
`);

type FragmentResult1951 = ResultOf<typeof FRAGMENT_1951>;
type FragmentSelf1951 = NonNullable<FragmentResult1951>;

export type FragmentToken1951 =
  | FragmentSelf1951["__typename"]
  | FragmentSelf1951["typenameHint"] | FragmentToken1949 | FragmentToken1950;
