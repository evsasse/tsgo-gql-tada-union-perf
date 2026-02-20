import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2140 } from "./fragment2140";
import type { FragmentToken2141 } from "./fragment2141";

export const FRAGMENT_2142 = gql(`
  fragment Fragment2142 on Member181 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_181
    memberCount_181
    memberMetric_181
  }
`);

type FragmentResult2142 = ResultOf<typeof FRAGMENT_2142>;
type FragmentSelf2142 = NonNullable<FragmentResult2142>;

export type FragmentToken2142 =
  | FragmentSelf2142["__typename"]
  | FragmentSelf2142["typenameHint"] | FragmentToken2140 | FragmentToken2141;
