import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1126 } from "./fragment1126";
import type { FragmentToken1127 } from "./fragment1127";

export const FRAGMENT_1128 = gql(`
  fragment Fragment1128 on Member07 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_07
    memberCount_07
    memberMetric_07
  }
`);

type FragmentResult1128 = ResultOf<typeof FRAGMENT_1128>;
type FragmentSelf1128 = NonNullable<FragmentResult1128>;

export type FragmentToken1128 =
  | FragmentSelf1128["__typename"]
  | FragmentSelf1128["typenameHint"] | FragmentToken1126 | FragmentToken1127;
