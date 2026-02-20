import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2261 } from "./fragment2261";
import type { FragmentToken2262 } from "./fragment2262";

export const FRAGMENT_2263 = gql(`
  fragment Fragment2263 on Member22 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_22
    memberCount_22
    memberMetric_22
  }
`);

type FragmentResult2263 = ResultOf<typeof FRAGMENT_2263>;
type FragmentSelf2263 = NonNullable<FragmentResult2263>;

export type FragmentToken2263 =
  | FragmentSelf2263["__typename"]
  | FragmentSelf2263["typenameHint"] | FragmentToken2261 | FragmentToken2262;
