import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2118 } from "./fragment2118";
import type { FragmentToken2119 } from "./fragment2119";

export const FRAGMENT_2120 = gql(`
  fragment Fragment2120 on Member159 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_159
    memberCount_159
    memberMetric_159
  }
`);

type FragmentResult2120 = ResultOf<typeof FRAGMENT_2120>;
type FragmentSelf2120 = NonNullable<FragmentResult2120>;

export type FragmentToken2120 =
  | FragmentSelf2120["__typename"]
  | FragmentSelf2120["typenameHint"] | FragmentToken2118 | FragmentToken2119;
