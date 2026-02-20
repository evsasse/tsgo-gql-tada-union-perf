import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2251 } from "./fragment2251";
import type { FragmentToken2252 } from "./fragment2252";

export const FRAGMENT_2253 = gql(`
  fragment Fragment2253 on Member12 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_12
    memberCount_12
    memberMetric_12
  }
`);

type FragmentResult2253 = ResultOf<typeof FRAGMENT_2253>;
type FragmentSelf2253 = NonNullable<FragmentResult2253>;

export type FragmentToken2253 =
  | FragmentSelf2253["__typename"]
  | FragmentSelf2253["typenameHint"] | FragmentToken2251 | FragmentToken2252;
