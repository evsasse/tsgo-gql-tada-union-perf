import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1975 } from "./fragment1975";
import type { FragmentToken1976 } from "./fragment1976";

export const FRAGMENT_1977 = gql(`
  fragment Fragment1977 on Member16 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_16
    memberCount_16
    memberMetric_16
  }
`);

type FragmentResult1977 = ResultOf<typeof FRAGMENT_1977>;
type FragmentSelf1977 = NonNullable<FragmentResult1977>;

export type FragmentToken1977 =
  | FragmentSelf1977["__typename"]
  | FragmentSelf1977["typenameHint"] | FragmentToken1975 | FragmentToken1976;
