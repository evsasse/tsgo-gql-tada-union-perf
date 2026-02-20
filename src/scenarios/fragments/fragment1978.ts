import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1976 } from "./fragment1976";
import type { FragmentToken1977 } from "./fragment1977";

export const FRAGMENT_1978 = gql(`
  fragment Fragment1978 on Member17 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_17
    memberCount_17
    memberMetric_17
  }
`);

type FragmentResult1978 = ResultOf<typeof FRAGMENT_1978>;
type FragmentSelf1978 = NonNullable<FragmentResult1978>;

export type FragmentToken1978 =
  | FragmentSelf1978["__typename"]
  | FragmentSelf1978["typenameHint"] | FragmentToken1976 | FragmentToken1977;
