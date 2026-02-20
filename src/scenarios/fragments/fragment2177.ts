import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2175 } from "./fragment2175";
import type { FragmentToken2176 } from "./fragment2176";

export const FRAGMENT_2177 = gql(`
  fragment Fragment2177 on Member216 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_216
    memberCount_216
    memberMetric_216
  }
`);

type FragmentResult2177 = ResultOf<typeof FRAGMENT_2177>;
type FragmentSelf2177 = NonNullable<FragmentResult2177>;

export type FragmentToken2177 =
  | FragmentSelf2177["__typename"]
  | FragmentSelf2177["typenameHint"] | FragmentToken2175 | FragmentToken2176;
