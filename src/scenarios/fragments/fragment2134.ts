import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2132 } from "./fragment2132";
import type { FragmentToken2133 } from "./fragment2133";

export const FRAGMENT_2134 = gql(`
  fragment Fragment2134 on Member173 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_173
    memberCount_173
    memberMetric_173
  }
`);

type FragmentResult2134 = ResultOf<typeof FRAGMENT_2134>;
type FragmentSelf2134 = NonNullable<FragmentResult2134>;

export type FragmentToken2134 =
  | FragmentSelf2134["__typename"]
  | FragmentSelf2134["typenameHint"] | FragmentToken2132 | FragmentToken2133;
