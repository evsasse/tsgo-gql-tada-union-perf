import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2156 } from "./fragment2156";
import type { FragmentToken2157 } from "./fragment2157";

export const FRAGMENT_2158 = gql(`
  fragment Fragment2158 on Member197 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_197
    memberCount_197
    memberMetric_197
  }
`);

type FragmentResult2158 = ResultOf<typeof FRAGMENT_2158>;
type FragmentSelf2158 = NonNullable<FragmentResult2158>;

export type FragmentToken2158 =
  | FragmentSelf2158["__typename"]
  | FragmentSelf2158["typenameHint"] | FragmentToken2156 | FragmentToken2157;
