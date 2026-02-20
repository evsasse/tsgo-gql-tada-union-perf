import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2276 } from "./fragment2276";
import type { FragmentToken2277 } from "./fragment2277";

export const FRAGMENT_2278 = gql(`
  fragment Fragment2278 on Member37 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_37
    memberCount_37
    memberMetric_37
  }
`);

type FragmentResult2278 = ResultOf<typeof FRAGMENT_2278>;
type FragmentSelf2278 = NonNullable<FragmentResult2278>;

export type FragmentToken2278 =
  | FragmentSelf2278["__typename"]
  | FragmentSelf2278["typenameHint"] | FragmentToken2276 | FragmentToken2277;
