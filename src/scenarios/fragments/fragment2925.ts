import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2923 } from "./fragment2923";
import type { FragmentToken2924 } from "./fragment2924";

export const FRAGMENT_2925 = gql(`
  fragment Fragment2925 on Member124 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_124
    memberCount_124
    memberMetric_124
  }
`);

type FragmentResult2925 = ResultOf<typeof FRAGMENT_2925>;
type FragmentSelf2925 = NonNullable<FragmentResult2925>;

export type FragmentToken2925 =
  | FragmentSelf2925["__typename"]
  | FragmentSelf2925["typenameHint"] | FragmentToken2923 | FragmentToken2924;
