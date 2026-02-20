import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2062 } from "./fragment2062";
import type { FragmentToken2063 } from "./fragment2063";

export const FRAGMENT_2064 = gql(`
  fragment Fragment2064 on Member103 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_103
    memberCount_103
    memberMetric_103
  }
`);

type FragmentResult2064 = ResultOf<typeof FRAGMENT_2064>;
type FragmentSelf2064 = NonNullable<FragmentResult2064>;

export type FragmentToken2064 =
  | FragmentSelf2064["__typename"]
  | FragmentSelf2064["typenameHint"] | FragmentToken2062 | FragmentToken2063;
