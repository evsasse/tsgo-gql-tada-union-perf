import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2051 } from "./fragment2051";
import type { FragmentToken2052 } from "./fragment2052";

export const FRAGMENT_2053 = gql(`
  fragment Fragment2053 on Member92 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_92
    memberCount_92
    memberMetric_92
  }
`);

type FragmentResult2053 = ResultOf<typeof FRAGMENT_2053>;
type FragmentSelf2053 = NonNullable<FragmentResult2053>;

export type FragmentToken2053 =
  | FragmentSelf2053["__typename"]
  | FragmentSelf2053["typenameHint"] | FragmentToken2051 | FragmentToken2052;
