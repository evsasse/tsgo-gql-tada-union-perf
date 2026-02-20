import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2065 } from "./fragment2065";
import type { FragmentToken2066 } from "./fragment2066";

export const FRAGMENT_2067 = gql(`
  fragment Fragment2067 on Member106 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_106
    memberCount_106
    memberMetric_106
  }
`);

type FragmentResult2067 = ResultOf<typeof FRAGMENT_2067>;
type FragmentSelf2067 = NonNullable<FragmentResult2067>;

export type FragmentToken2067 =
  | FragmentSelf2067["__typename"]
  | FragmentSelf2067["typenameHint"] | FragmentToken2065 | FragmentToken2066;
