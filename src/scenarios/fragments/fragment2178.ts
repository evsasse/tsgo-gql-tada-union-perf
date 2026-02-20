import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2176 } from "./fragment2176";
import type { FragmentToken2177 } from "./fragment2177";

export const FRAGMENT_2178 = gql(`
  fragment Fragment2178 on Member217 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_217
    memberCount_217
    memberMetric_217
  }
`);

type FragmentResult2178 = ResultOf<typeof FRAGMENT_2178>;
type FragmentSelf2178 = NonNullable<FragmentResult2178>;

export type FragmentToken2178 =
  | FragmentSelf2178["__typename"]
  | FragmentSelf2178["typenameHint"] | FragmentToken2176 | FragmentToken2177;
