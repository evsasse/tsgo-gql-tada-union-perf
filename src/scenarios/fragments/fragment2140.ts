import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2138 } from "./fragment2138";
import type { FragmentToken2139 } from "./fragment2139";

export const FRAGMENT_2140 = gql(`
  fragment Fragment2140 on Member179 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_179
    memberCount_179
    memberMetric_179
  }
`);

type FragmentResult2140 = ResultOf<typeof FRAGMENT_2140>;
type FragmentSelf2140 = NonNullable<FragmentResult2140>;

export type FragmentToken2140 =
  | FragmentSelf2140["__typename"]
  | FragmentSelf2140["typenameHint"] | FragmentToken2138 | FragmentToken2139;
