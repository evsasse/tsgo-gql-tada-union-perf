import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2237 } from "./fragment2237";
import type { FragmentToken2238 } from "./fragment2238";

export const FRAGMENT_2239 = gql(`
  fragment Fragment2239 on Member278 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_278
    memberCount_278
    memberMetric_278
  }
`);

type FragmentResult2239 = ResultOf<typeof FRAGMENT_2239>;
type FragmentSelf2239 = NonNullable<FragmentResult2239>;

export type FragmentToken2239 =
  | FragmentSelf2239["__typename"]
  | FragmentSelf2239["typenameHint"] | FragmentToken2237 | FragmentToken2238;
