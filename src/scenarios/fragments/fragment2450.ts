import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2448 } from "./fragment2448";
import type { FragmentToken2449 } from "./fragment2449";

export const FRAGMENT_2450 = gql(`
  fragment Fragment2450 on Member209 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_209
    memberCount_209
    memberMetric_209
  }
`);

type FragmentResult2450 = ResultOf<typeof FRAGMENT_2450>;
type FragmentSelf2450 = NonNullable<FragmentResult2450>;

export type FragmentToken2450 =
  | FragmentSelf2450["__typename"]
  | FragmentSelf2450["typenameHint"] | FragmentToken2448 | FragmentToken2449;
