import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2088 } from "./fragment2088";
import type { FragmentToken2089 } from "./fragment2089";

export const FRAGMENT_2090 = gql(`
  fragment Fragment2090 on Member129 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_129
    memberCount_129
    memberMetric_129
  }
`);

type FragmentResult2090 = ResultOf<typeof FRAGMENT_2090>;
type FragmentSelf2090 = NonNullable<FragmentResult2090>;

export type FragmentToken2090 =
  | FragmentSelf2090["__typename"]
  | FragmentSelf2090["typenameHint"] | FragmentToken2088 | FragmentToken2089;
