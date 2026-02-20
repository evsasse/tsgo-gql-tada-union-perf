import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2084 } from "./fragment2084";
import type { FragmentToken2085 } from "./fragment2085";

export const FRAGMENT_2086 = gql(`
  fragment Fragment2086 on Member125 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_125
    memberCount_125
    memberMetric_125
  }
`);

type FragmentResult2086 = ResultOf<typeof FRAGMENT_2086>;
type FragmentSelf2086 = NonNullable<FragmentResult2086>;

export type FragmentToken2086 =
  | FragmentSelf2086["__typename"]
  | FragmentSelf2086["typenameHint"] | FragmentToken2084 | FragmentToken2085;
