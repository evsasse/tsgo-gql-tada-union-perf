import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2314 } from "./fragment2314";
import type { FragmentToken2315 } from "./fragment2315";

export const FRAGMENT_2316 = gql(`
  fragment Fragment2316 on Member75 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_75
    memberCount_75
    memberMetric_75
  }
`);

type FragmentResult2316 = ResultOf<typeof FRAGMENT_2316>;
type FragmentSelf2316 = NonNullable<FragmentResult2316>;

export type FragmentToken2316 =
  | FragmentSelf2316["__typename"]
  | FragmentSelf2316["typenameHint"] | FragmentToken2314 | FragmentToken2315;
