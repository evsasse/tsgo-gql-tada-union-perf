import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2426 } from "./fragment2426";
import type { FragmentToken2427 } from "./fragment2427";

export const FRAGMENT_2428 = gql(`
  fragment Fragment2428 on Member187 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_187
    memberCount_187
    memberMetric_187
  }
`);

type FragmentResult2428 = ResultOf<typeof FRAGMENT_2428>;
type FragmentSelf2428 = NonNullable<FragmentResult2428>;

export type FragmentToken2428 =
  | FragmentSelf2428["__typename"]
  | FragmentSelf2428["typenameHint"] | FragmentToken2426 | FragmentToken2427;
