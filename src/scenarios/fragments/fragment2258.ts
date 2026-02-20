import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2256 } from "./fragment2256";
import type { FragmentToken2257 } from "./fragment2257";

export const FRAGMENT_2258 = gql(`
  fragment Fragment2258 on Member17 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_17
    memberCount_17
    memberMetric_17
  }
`);

type FragmentResult2258 = ResultOf<typeof FRAGMENT_2258>;
type FragmentSelf2258 = NonNullable<FragmentResult2258>;

export type FragmentToken2258 =
  | FragmentSelf2258["__typename"]
  | FragmentSelf2258["typenameHint"] | FragmentToken2256 | FragmentToken2257;
