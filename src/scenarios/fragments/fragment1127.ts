import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1125 } from "./fragment1125";
import type { FragmentToken1126 } from "./fragment1126";

export const FRAGMENT_1127 = gql(`
  fragment Fragment1127 on Member06 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_06
    memberCount_06
    memberMetric_06
  }
`);

type FragmentResult1127 = ResultOf<typeof FRAGMENT_1127>;
type FragmentSelf1127 = NonNullable<FragmentResult1127>;

export type FragmentToken1127 =
  | FragmentSelf1127["__typename"]
  | FragmentSelf1127["typenameHint"] | FragmentToken1125 | FragmentToken1126;
