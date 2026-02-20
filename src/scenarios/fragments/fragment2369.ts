import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2367 } from "./fragment2367";
import type { FragmentToken2368 } from "./fragment2368";

export const FRAGMENT_2369 = gql(`
  fragment Fragment2369 on Member128 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_128
    memberCount_128
    memberMetric_128
  }
`);

type FragmentResult2369 = ResultOf<typeof FRAGMENT_2369>;
type FragmentSelf2369 = NonNullable<FragmentResult2369>;

export type FragmentToken2369 =
  | FragmentSelf2369["__typename"]
  | FragmentSelf2369["typenameHint"] | FragmentToken2367 | FragmentToken2368;
