import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2083 } from "./fragment2083";
import type { FragmentToken2084 } from "./fragment2084";

export const FRAGMENT_2085 = gql(`
  fragment Fragment2085 on Member124 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_124
    memberCount_124
    memberMetric_124
  }
`);

type FragmentResult2085 = ResultOf<typeof FRAGMENT_2085>;
type FragmentSelf2085 = NonNullable<FragmentResult2085>;

export type FragmentToken2085 =
  | FragmentSelf2085["__typename"]
  | FragmentSelf2085["typenameHint"] | FragmentToken2083 | FragmentToken2084;
