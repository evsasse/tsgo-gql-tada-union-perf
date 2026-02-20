import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2384 } from "./fragment2384";
import type { FragmentToken2385 } from "./fragment2385";

export const FRAGMENT_2386 = gql(`
  fragment Fragment2386 on Member145 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_145
    memberCount_145
    memberMetric_145
  }
`);

type FragmentResult2386 = ResultOf<typeof FRAGMENT_2386>;
type FragmentSelf2386 = NonNullable<FragmentResult2386>;

export type FragmentToken2386 =
  | FragmentSelf2386["__typename"]
  | FragmentSelf2386["typenameHint"] | FragmentToken2384 | FragmentToken2385;
