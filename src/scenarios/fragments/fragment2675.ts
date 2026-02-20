import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2673 } from "./fragment2673";
import type { FragmentToken2674 } from "./fragment2674";

export const FRAGMENT_2675 = gql(`
  fragment Fragment2675 on Member154 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_154
    memberCount_154
    memberMetric_154
  }
`);

type FragmentResult2675 = ResultOf<typeof FRAGMENT_2675>;
type FragmentSelf2675 = NonNullable<FragmentResult2675>;

export type FragmentToken2675 =
  | FragmentSelf2675["__typename"]
  | FragmentSelf2675["typenameHint"] | FragmentToken2673 | FragmentToken2674;
