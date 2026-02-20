import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2193 } from "./fragment2193";
import type { FragmentToken2194 } from "./fragment2194";

export const FRAGMENT_2195 = gql(`
  fragment Fragment2195 on Member234 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_234
    memberCount_234
    memberMetric_234
  }
`);

type FragmentResult2195 = ResultOf<typeof FRAGMENT_2195>;
type FragmentSelf2195 = NonNullable<FragmentResult2195>;

export type FragmentToken2195 =
  | FragmentSelf2195["__typename"]
  | FragmentSelf2195["typenameHint"] | FragmentToken2193 | FragmentToken2194;
