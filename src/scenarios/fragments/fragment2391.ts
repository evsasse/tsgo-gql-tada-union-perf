import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2389 } from "./fragment2389";
import type { FragmentToken2390 } from "./fragment2390";

export const FRAGMENT_2391 = gql(`
  fragment Fragment2391 on Member150 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_150
    memberCount_150
    memberMetric_150
  }
`);

type FragmentResult2391 = ResultOf<typeof FRAGMENT_2391>;
type FragmentSelf2391 = NonNullable<FragmentResult2391>;

export type FragmentToken2391 =
  | FragmentSelf2391["__typename"]
  | FragmentSelf2391["typenameHint"] | FragmentToken2389 | FragmentToken2390;
