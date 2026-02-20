import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2378 } from "./fragment2378";
import type { FragmentToken2379 } from "./fragment2379";

export const FRAGMENT_2380 = gql(`
  fragment Fragment2380 on Member139 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_139
    memberCount_139
    memberMetric_139
  }
`);

type FragmentResult2380 = ResultOf<typeof FRAGMENT_2380>;
type FragmentSelf2380 = NonNullable<FragmentResult2380>;

export type FragmentToken2380 =
  | FragmentSelf2380["__typename"]
  | FragmentSelf2380["typenameHint"] | FragmentToken2378 | FragmentToken2379;
