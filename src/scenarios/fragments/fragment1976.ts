import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1974 } from "./fragment1974";
import type { FragmentToken1975 } from "./fragment1975";

export const FRAGMENT_1976 = gql(`
  fragment Fragment1976 on Member15 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_15
    memberCount_15
    memberMetric_15
  }
`);

type FragmentResult1976 = ResultOf<typeof FRAGMENT_1976>;
type FragmentSelf1976 = NonNullable<FragmentResult1976>;

export type FragmentToken1976 =
  | FragmentSelf1976["__typename"]
  | FragmentSelf1976["typenameHint"] | FragmentToken1974 | FragmentToken1975;
