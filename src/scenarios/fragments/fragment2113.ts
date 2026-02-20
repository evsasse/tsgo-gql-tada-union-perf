import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2111 } from "./fragment2111";
import type { FragmentToken2112 } from "./fragment2112";

export const FRAGMENT_2113 = gql(`
  fragment Fragment2113 on Member152 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_152
    memberCount_152
    memberMetric_152
  }
`);

type FragmentResult2113 = ResultOf<typeof FRAGMENT_2113>;
type FragmentSelf2113 = NonNullable<FragmentResult2113>;

export type FragmentToken2113 =
  | FragmentSelf2113["__typename"]
  | FragmentSelf2113["typenameHint"] | FragmentToken2111 | FragmentToken2112;
