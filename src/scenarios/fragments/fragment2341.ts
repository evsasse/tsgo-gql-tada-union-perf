import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2339 } from "./fragment2339";
import type { FragmentToken2340 } from "./fragment2340";

export const FRAGMENT_2341 = gql(`
  fragment Fragment2341 on Member100 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_100
    memberCount_100
    memberMetric_100
  }
`);

type FragmentResult2341 = ResultOf<typeof FRAGMENT_2341>;
type FragmentSelf2341 = NonNullable<FragmentResult2341>;

export type FragmentToken2341 =
  | FragmentSelf2341["__typename"]
  | FragmentSelf2341["typenameHint"] | FragmentToken2339 | FragmentToken2340;
