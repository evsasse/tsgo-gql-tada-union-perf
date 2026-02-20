import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2292 } from "./fragment2292";
import type { FragmentToken2293 } from "./fragment2293";

export const FRAGMENT_2294 = gql(`
  fragment Fragment2294 on Member53 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_53
    memberCount_53
    memberMetric_53
  }
`);

type FragmentResult2294 = ResultOf<typeof FRAGMENT_2294>;
type FragmentSelf2294 = NonNullable<FragmentResult2294>;

export type FragmentToken2294 =
  | FragmentSelf2294["__typename"]
  | FragmentSelf2294["typenameHint"] | FragmentToken2292 | FragmentToken2293;
