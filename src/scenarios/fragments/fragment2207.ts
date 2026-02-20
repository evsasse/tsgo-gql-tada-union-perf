import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2205 } from "./fragment2205";
import type { FragmentToken2206 } from "./fragment2206";

export const FRAGMENT_2207 = gql(`
  fragment Fragment2207 on Member246 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_246
    memberCount_246
    memberMetric_246
  }
`);

type FragmentResult2207 = ResultOf<typeof FRAGMENT_2207>;
type FragmentSelf2207 = NonNullable<FragmentResult2207>;

export type FragmentToken2207 =
  | FragmentSelf2207["__typename"]
  | FragmentSelf2207["typenameHint"] | FragmentToken2205 | FragmentToken2206;
