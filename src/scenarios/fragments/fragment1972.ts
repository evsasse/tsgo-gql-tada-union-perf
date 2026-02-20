import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1970 } from "./fragment1970";
import type { FragmentToken1971 } from "./fragment1971";

export const FRAGMENT_1972 = gql(`
  fragment Fragment1972 on Member11 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_11
    memberCount_11
    memberMetric_11
  }
`);

type FragmentResult1972 = ResultOf<typeof FRAGMENT_1972>;
type FragmentSelf1972 = NonNullable<FragmentResult1972>;

export type FragmentToken1972 =
  | FragmentSelf1972["__typename"]
  | FragmentSelf1972["typenameHint"] | FragmentToken1970 | FragmentToken1971;
