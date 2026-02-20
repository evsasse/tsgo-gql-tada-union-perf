import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2133 } from "./fragment2133";
import type { FragmentToken2134 } from "./fragment2134";

export const FRAGMENT_2135 = gql(`
  fragment Fragment2135 on Member174 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_174
    memberCount_174
    memberMetric_174
  }
`);

type FragmentResult2135 = ResultOf<typeof FRAGMENT_2135>;
type FragmentSelf2135 = NonNullable<FragmentResult2135>;

export type FragmentToken2135 =
  | FragmentSelf2135["__typename"]
  | FragmentSelf2135["typenameHint"] | FragmentToken2133 | FragmentToken2134;
