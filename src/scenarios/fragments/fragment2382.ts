import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2380 } from "./fragment2380";
import type { FragmentToken2381 } from "./fragment2381";

export const FRAGMENT_2382 = gql(`
  fragment Fragment2382 on Member141 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_141
    memberCount_141
    memberMetric_141
  }
`);

type FragmentResult2382 = ResultOf<typeof FRAGMENT_2382>;
type FragmentSelf2382 = NonNullable<FragmentResult2382>;

export type FragmentToken2382 =
  | FragmentSelf2382["__typename"]
  | FragmentSelf2382["typenameHint"] | FragmentToken2380 | FragmentToken2381;
