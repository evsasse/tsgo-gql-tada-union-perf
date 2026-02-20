import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2287 } from "./fragment2287";
import type { FragmentToken2288 } from "./fragment2288";

export const FRAGMENT_2289 = gql(`
  fragment Fragment2289 on Member48 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_48
    memberCount_48
    memberMetric_48
  }
`);

type FragmentResult2289 = ResultOf<typeof FRAGMENT_2289>;
type FragmentSelf2289 = NonNullable<FragmentResult2289>;

export type FragmentToken2289 =
  | FragmentSelf2289["__typename"]
  | FragmentSelf2289["typenameHint"] | FragmentToken2287 | FragmentToken2288;
