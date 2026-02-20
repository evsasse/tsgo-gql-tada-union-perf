import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2167 } from "./fragment2167";
import type { FragmentToken2168 } from "./fragment2168";

export const FRAGMENT_2169 = gql(`
  fragment Fragment2169 on Member208 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_208
    memberCount_208
    memberMetric_208
  }
`);

type FragmentResult2169 = ResultOf<typeof FRAGMENT_2169>;
type FragmentSelf2169 = NonNullable<FragmentResult2169>;

export type FragmentToken2169 =
  | FragmentSelf2169["__typename"]
  | FragmentSelf2169["typenameHint"] | FragmentToken2167 | FragmentToken2168;
