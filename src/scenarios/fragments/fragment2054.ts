import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2052 } from "./fragment2052";
import type { FragmentToken2053 } from "./fragment2053";

export const FRAGMENT_2054 = gql(`
  fragment Fragment2054 on Member93 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_93
    memberCount_93
    memberMetric_93
  }
`);

type FragmentResult2054 = ResultOf<typeof FRAGMENT_2054>;
type FragmentSelf2054 = NonNullable<FragmentResult2054>;

export type FragmentToken2054 =
  | FragmentSelf2054["__typename"]
  | FragmentSelf2054["typenameHint"] | FragmentToken2052 | FragmentToken2053;
