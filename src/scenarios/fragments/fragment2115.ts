import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2113 } from "./fragment2113";
import type { FragmentToken2114 } from "./fragment2114";

export const FRAGMENT_2115 = gql(`
  fragment Fragment2115 on Member154 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_154
    memberCount_154
    memberMetric_154
  }
`);

type FragmentResult2115 = ResultOf<typeof FRAGMENT_2115>;
type FragmentSelf2115 = NonNullable<FragmentResult2115>;

export type FragmentToken2115 =
  | FragmentSelf2115["__typename"]
  | FragmentSelf2115["typenameHint"] | FragmentToken2113 | FragmentToken2114;
