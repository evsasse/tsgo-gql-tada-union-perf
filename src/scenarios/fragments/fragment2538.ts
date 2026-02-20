import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2536 } from "./fragment2536";
import type { FragmentToken2537 } from "./fragment2537";

export const FRAGMENT_2538 = gql(`
  fragment Fragment2538 on Member17 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_17
    memberCount_17
    memberMetric_17
  }
`);

type FragmentResult2538 = ResultOf<typeof FRAGMENT_2538>;
type FragmentSelf2538 = NonNullable<FragmentResult2538>;

export type FragmentToken2538 =
  | FragmentSelf2538["__typename"]
  | FragmentSelf2538["typenameHint"] | FragmentToken2536 | FragmentToken2537;
