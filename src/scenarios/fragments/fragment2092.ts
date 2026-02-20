import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2090 } from "./fragment2090";
import type { FragmentToken2091 } from "./fragment2091";

export const FRAGMENT_2092 = gql(`
  fragment Fragment2092 on Member131 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_131
    memberCount_131
    memberMetric_131
  }
`);

type FragmentResult2092 = ResultOf<typeof FRAGMENT_2092>;
type FragmentSelf2092 = NonNullable<FragmentResult2092>;

export type FragmentToken2092 =
  | FragmentSelf2092["__typename"]
  | FragmentSelf2092["typenameHint"] | FragmentToken2090 | FragmentToken2091;
