import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2249 } from "./fragment2249";
import type { FragmentToken2250 } from "./fragment2250";

export const FRAGMENT_2251 = gql(`
  fragment Fragment2251 on Member10 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_10
    memberCount_10
    memberMetric_10
  }
`);

type FragmentResult2251 = ResultOf<typeof FRAGMENT_2251>;
type FragmentSelf2251 = NonNullable<FragmentResult2251>;

export type FragmentToken2251 =
  | FragmentSelf2251["__typename"]
  | FragmentSelf2251["typenameHint"] | FragmentToken2249 | FragmentToken2250;
