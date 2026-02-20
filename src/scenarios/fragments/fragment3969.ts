import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3967 } from "./fragment3967";
import type { FragmentToken3968 } from "./fragment3968";

export const FRAGMENT_3969 = gql(`
  fragment Fragment3969 on Member48 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_48
    memberCount_48
    memberMetric_48
  }
`);

type FragmentResult3969 = ResultOf<typeof FRAGMENT_3969>;
type FragmentSelf3969 = NonNullable<FragmentResult3969>;

export type FragmentToken3969 =
  | FragmentSelf3969["__typename"]
  | FragmentSelf3969["typenameHint"] | FragmentToken3967 | FragmentToken3968;
