import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2034 } from "./fragment2034";
import type { FragmentToken2035 } from "./fragment2035";

export const FRAGMENT_2036 = gql(`
  fragment Fragment2036 on Member75 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_75
    memberCount_75
    memberMetric_75
  }
`);

type FragmentResult2036 = ResultOf<typeof FRAGMENT_2036>;
type FragmentSelf2036 = NonNullable<FragmentResult2036>;

export type FragmentToken2036 =
  | FragmentSelf2036["__typename"]
  | FragmentSelf2036["typenameHint"] | FragmentToken2034 | FragmentToken2035;
