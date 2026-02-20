import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2141 } from "./fragment2141";
import type { FragmentToken2142 } from "./fragment2142";

export const FRAGMENT_2143 = gql(`
  fragment Fragment2143 on Member182 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_182
    memberCount_182
    memberMetric_182
  }
`);

type FragmentResult2143 = ResultOf<typeof FRAGMENT_2143>;
type FragmentSelf2143 = NonNullable<FragmentResult2143>;

export type FragmentToken2143 =
  | FragmentSelf2143["__typename"]
  | FragmentSelf2143["typenameHint"] | FragmentToken2141 | FragmentToken2142;
