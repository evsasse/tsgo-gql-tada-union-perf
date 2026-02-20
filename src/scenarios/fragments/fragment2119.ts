import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2117 } from "./fragment2117";
import type { FragmentToken2118 } from "./fragment2118";

export const FRAGMENT_2119 = gql(`
  fragment Fragment2119 on Member158 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_158
    memberCount_158
    memberMetric_158
  }
`);

type FragmentResult2119 = ResultOf<typeof FRAGMENT_2119>;
type FragmentSelf2119 = NonNullable<FragmentResult2119>;

export type FragmentToken2119 =
  | FragmentSelf2119["__typename"]
  | FragmentSelf2119["typenameHint"] | FragmentToken2117 | FragmentToken2118;
