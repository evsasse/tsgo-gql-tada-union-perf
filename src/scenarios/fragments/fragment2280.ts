import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2278 } from "./fragment2278";
import type { FragmentToken2279 } from "./fragment2279";

export const FRAGMENT_2280 = gql(`
  fragment Fragment2280 on Member39 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_39
    memberCount_39
    memberMetric_39
  }
`);

type FragmentResult2280 = ResultOf<typeof FRAGMENT_2280>;
type FragmentSelf2280 = NonNullable<FragmentResult2280>;

export type FragmentToken2280 =
  | FragmentSelf2280["__typename"]
  | FragmentSelf2280["typenameHint"] | FragmentToken2278 | FragmentToken2279;
