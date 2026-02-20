import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2061 } from "./fragment2061";
import type { FragmentToken2062 } from "./fragment2062";

export const FRAGMENT_2063 = gql(`
  fragment Fragment2063 on Member102 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_102
    memberCount_102
    memberMetric_102
  }
`);

type FragmentResult2063 = ResultOf<typeof FRAGMENT_2063>;
type FragmentSelf2063 = NonNullable<FragmentResult2063>;

export type FragmentToken2063 =
  | FragmentSelf2063["__typename"]
  | FragmentSelf2063["typenameHint"] | FragmentToken2061 | FragmentToken2062;
