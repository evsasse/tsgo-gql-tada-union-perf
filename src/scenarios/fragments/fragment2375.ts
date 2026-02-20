import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2373 } from "./fragment2373";
import type { FragmentToken2374 } from "./fragment2374";

export const FRAGMENT_2375 = gql(`
  fragment Fragment2375 on Member134 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_134
    memberCount_134
    memberMetric_134
  }
`);

type FragmentResult2375 = ResultOf<typeof FRAGMENT_2375>;
type FragmentSelf2375 = NonNullable<FragmentResult2375>;

export type FragmentToken2375 =
  | FragmentSelf2375["__typename"]
  | FragmentSelf2375["typenameHint"] | FragmentToken2373 | FragmentToken2374;
