import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2379 } from "./fragment2379";
import type { FragmentToken2380 } from "./fragment2380";

export const FRAGMENT_2381 = gql(`
  fragment Fragment2381 on Member140 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_140
    memberCount_140
    memberMetric_140
  }
`);

type FragmentResult2381 = ResultOf<typeof FRAGMENT_2381>;
type FragmentSelf2381 = NonNullable<FragmentResult2381>;

export type FragmentToken2381 =
  | FragmentSelf2381["__typename"]
  | FragmentSelf2381["typenameHint"] | FragmentToken2379 | FragmentToken2380;
