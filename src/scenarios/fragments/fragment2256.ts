import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2254 } from "./fragment2254";
import type { FragmentToken2255 } from "./fragment2255";

export const FRAGMENT_2256 = gql(`
  fragment Fragment2256 on Member15 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_15
    memberCount_15
    memberMetric_15
  }
`);

type FragmentResult2256 = ResultOf<typeof FRAGMENT_2256>;
type FragmentSelf2256 = NonNullable<FragmentResult2256>;

export type FragmentToken2256 =
  | FragmentSelf2256["__typename"]
  | FragmentSelf2256["typenameHint"] | FragmentToken2254 | FragmentToken2255;
