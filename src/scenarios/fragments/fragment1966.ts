import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1964 } from "./fragment1964";
import type { FragmentToken1965 } from "./fragment1965";

export const FRAGMENT_1966 = gql(`
  fragment Fragment1966 on Member05 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_05
    memberCount_05
    memberMetric_05
  }
`);

type FragmentResult1966 = ResultOf<typeof FRAGMENT_1966>;
type FragmentSelf1966 = NonNullable<FragmentResult1966>;

export type FragmentToken1966 =
  | FragmentSelf1966["__typename"]
  | FragmentSelf1966["typenameHint"] | FragmentToken1964 | FragmentToken1965;
