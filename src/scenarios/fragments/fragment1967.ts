import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1965 } from "./fragment1965";
import type { FragmentToken1966 } from "./fragment1966";

export const FRAGMENT_1967 = gql(`
  fragment Fragment1967 on Member06 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_06
    memberCount_06
    memberMetric_06
  }
`);

type FragmentResult1967 = ResultOf<typeof FRAGMENT_1967>;
type FragmentSelf1967 = NonNullable<FragmentResult1967>;

export type FragmentToken1967 =
  | FragmentSelf1967["__typename"]
  | FragmentSelf1967["typenameHint"] | FragmentToken1965 | FragmentToken1966;
