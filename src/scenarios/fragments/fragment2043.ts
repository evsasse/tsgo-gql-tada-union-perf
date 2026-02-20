import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2041 } from "./fragment2041";
import type { FragmentToken2042 } from "./fragment2042";

export const FRAGMENT_2043 = gql(`
  fragment Fragment2043 on Member82 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_82
    memberCount_82
    memberMetric_82
  }
`);

type FragmentResult2043 = ResultOf<typeof FRAGMENT_2043>;
type FragmentSelf2043 = NonNullable<FragmentResult2043>;

export type FragmentToken2043 =
  | FragmentSelf2043["__typename"]
  | FragmentSelf2043["typenameHint"] | FragmentToken2041 | FragmentToken2042;
