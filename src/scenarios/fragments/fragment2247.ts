import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2245 } from "./fragment2245";
import type { FragmentToken2246 } from "./fragment2246";

export const FRAGMENT_2247 = gql(`
  fragment Fragment2247 on Member06 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_06
    memberCount_06
    memberMetric_06
  }
`);

type FragmentResult2247 = ResultOf<typeof FRAGMENT_2247>;
type FragmentSelf2247 = NonNullable<FragmentResult2247>;

export type FragmentToken2247 =
  | FragmentSelf2247["__typename"]
  | FragmentSelf2247["typenameHint"] | FragmentToken2245 | FragmentToken2246;
