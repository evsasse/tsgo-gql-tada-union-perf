import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2063 } from "./fragment2063";
import type { FragmentToken2064 } from "./fragment2064";

export const FRAGMENT_2065 = gql(`
  fragment Fragment2065 on Member104 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_104
    memberCount_104
    memberMetric_104
  }
`);

type FragmentResult2065 = ResultOf<typeof FRAGMENT_2065>;
type FragmentSelf2065 = NonNullable<FragmentResult2065>;

export type FragmentToken2065 =
  | FragmentSelf2065["__typename"]
  | FragmentSelf2065["typenameHint"] | FragmentToken2063 | FragmentToken2064;
