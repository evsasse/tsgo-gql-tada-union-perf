import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2178 } from "./fragment2178";
import type { FragmentToken2179 } from "./fragment2179";

export const FRAGMENT_2180 = gql(`
  fragment Fragment2180 on Member219 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_219
    memberCount_219
    memberMetric_219
  }
`);

type FragmentResult2180 = ResultOf<typeof FRAGMENT_2180>;
type FragmentSelf2180 = NonNullable<FragmentResult2180>;

export type FragmentToken2180 =
  | FragmentSelf2180["__typename"]
  | FragmentSelf2180["typenameHint"] | FragmentToken2178 | FragmentToken2179;
