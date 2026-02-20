import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2267 } from "./fragment2267";
import type { FragmentToken2268 } from "./fragment2268";

export const FRAGMENT_2269 = gql(`
  fragment Fragment2269 on Member28 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_28
    memberCount_28
    memberMetric_28
  }
`);

type FragmentResult2269 = ResultOf<typeof FRAGMENT_2269>;
type FragmentSelf2269 = NonNullable<FragmentResult2269>;

export type FragmentToken2269 =
  | FragmentSelf2269["__typename"]
  | FragmentSelf2269["typenameHint"] | FragmentToken2267 | FragmentToken2268;
