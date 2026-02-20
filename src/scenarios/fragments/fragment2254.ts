import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2252 } from "./fragment2252";
import type { FragmentToken2253 } from "./fragment2253";

export const FRAGMENT_2254 = gql(`
  fragment Fragment2254 on Member13 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_13
    memberCount_13
    memberMetric_13
  }
`);

type FragmentResult2254 = ResultOf<typeof FRAGMENT_2254>;
type FragmentSelf2254 = NonNullable<FragmentResult2254>;

export type FragmentToken2254 =
  | FragmentSelf2254["__typename"]
  | FragmentSelf2254["typenameHint"] | FragmentToken2252 | FragmentToken2253;
