import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2143 } from "./fragment2143";
import type { FragmentToken2144 } from "./fragment2144";

export const FRAGMENT_2145 = gql(`
  fragment Fragment2145 on Member184 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_184
    memberCount_184
    memberMetric_184
  }
`);

type FragmentResult2145 = ResultOf<typeof FRAGMENT_2145>;
type FragmentSelf2145 = NonNullable<FragmentResult2145>;

export type FragmentToken2145 =
  | FragmentSelf2145["__typename"]
  | FragmentSelf2145["typenameHint"] | FragmentToken2143 | FragmentToken2144;
