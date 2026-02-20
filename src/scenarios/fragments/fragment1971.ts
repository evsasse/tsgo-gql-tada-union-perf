import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1969 } from "./fragment1969";
import type { FragmentToken1970 } from "./fragment1970";

export const FRAGMENT_1971 = gql(`
  fragment Fragment1971 on Member10 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_10
    memberCount_10
    memberMetric_10
  }
`);

type FragmentResult1971 = ResultOf<typeof FRAGMENT_1971>;
type FragmentSelf1971 = NonNullable<FragmentResult1971>;

export type FragmentToken1971 =
  | FragmentSelf1971["__typename"]
  | FragmentSelf1971["typenameHint"] | FragmentToken1969 | FragmentToken1970;
