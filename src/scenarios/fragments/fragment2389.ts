import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2387 } from "./fragment2387";
import type { FragmentToken2388 } from "./fragment2388";

export const FRAGMENT_2389 = gql(`
  fragment Fragment2389 on Member148 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_148
    memberCount_148
    memberMetric_148
  }
`);

type FragmentResult2389 = ResultOf<typeof FRAGMENT_2389>;
type FragmentSelf2389 = NonNullable<FragmentResult2389>;

export type FragmentToken2389 =
  | FragmentSelf2389["__typename"]
  | FragmentSelf2389["typenameHint"] | FragmentToken2387 | FragmentToken2388;
