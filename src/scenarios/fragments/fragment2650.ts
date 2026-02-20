import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2648 } from "./fragment2648";
import type { FragmentToken2649 } from "./fragment2649";

export const FRAGMENT_2650 = gql(`
  fragment Fragment2650 on Member129 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_129
    memberCount_129
    memberMetric_129
  }
`);

type FragmentResult2650 = ResultOf<typeof FRAGMENT_2650>;
type FragmentSelf2650 = NonNullable<FragmentResult2650>;

export type FragmentToken2650 =
  | FragmentSelf2650["__typename"]
  | FragmentSelf2650["typenameHint"] | FragmentToken2648 | FragmentToken2649;
