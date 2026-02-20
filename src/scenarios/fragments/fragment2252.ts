import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2250 } from "./fragment2250";
import type { FragmentToken2251 } from "./fragment2251";

export const FRAGMENT_2252 = gql(`
  fragment Fragment2252 on Member11 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_11
    memberCount_11
    memberMetric_11
  }
`);

type FragmentResult2252 = ResultOf<typeof FRAGMENT_2252>;
type FragmentSelf2252 = NonNullable<FragmentResult2252>;

export type FragmentToken2252 =
  | FragmentSelf2252["__typename"]
  | FragmentSelf2252["typenameHint"] | FragmentToken2250 | FragmentToken2251;
