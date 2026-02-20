import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2115 } from "./fragment2115";
import type { FragmentToken2116 } from "./fragment2116";

export const FRAGMENT_2117 = gql(`
  fragment Fragment2117 on Member156 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_156
    memberCount_156
    memberMetric_156
  }
`);

type FragmentResult2117 = ResultOf<typeof FRAGMENT_2117>;
type FragmentSelf2117 = NonNullable<FragmentResult2117>;

export type FragmentToken2117 =
  | FragmentSelf2117["__typename"]
  | FragmentSelf2117["typenameHint"] | FragmentToken2115 | FragmentToken2116;
