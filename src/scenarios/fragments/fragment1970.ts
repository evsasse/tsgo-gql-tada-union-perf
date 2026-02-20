import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1968 } from "./fragment1968";
import type { FragmentToken1969 } from "./fragment1969";

export const FRAGMENT_1970 = gql(`
  fragment Fragment1970 on Member09 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_09
    memberCount_09
    memberMetric_09
  }
`);

type FragmentResult1970 = ResultOf<typeof FRAGMENT_1970>;
type FragmentSelf1970 = NonNullable<FragmentResult1970>;

export type FragmentToken1970 =
  | FragmentSelf1970["__typename"]
  | FragmentSelf1970["typenameHint"] | FragmentToken1968 | FragmentToken1969;
