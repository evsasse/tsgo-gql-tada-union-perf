import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1946 } from "./fragment1946";
import type { FragmentToken1947 } from "./fragment1947";

export const FRAGMENT_1948 = gql(`
  fragment Fragment1948 on Member267 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_267
    memberCount_267
    memberMetric_267
  }
`);

type FragmentResult1948 = ResultOf<typeof FRAGMENT_1948>;
type FragmentSelf1948 = NonNullable<FragmentResult1948>;

export type FragmentToken1948 =
  | FragmentSelf1948["__typename"]
  | FragmentSelf1948["typenameHint"] | FragmentToken1946 | FragmentToken1947;
