import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2368 } from "./fragment2368";
import type { FragmentToken2369 } from "./fragment2369";

export const FRAGMENT_2370 = gql(`
  fragment Fragment2370 on Member129 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_129
    memberCount_129
    memberMetric_129
  }
`);

type FragmentResult2370 = ResultOf<typeof FRAGMENT_2370>;
type FragmentSelf2370 = NonNullable<FragmentResult2370>;

export type FragmentToken2370 =
  | FragmentSelf2370["__typename"]
  | FragmentSelf2370["typenameHint"] | FragmentToken2368 | FragmentToken2369;
