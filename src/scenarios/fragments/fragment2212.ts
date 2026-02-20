import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2210 } from "./fragment2210";
import type { FragmentToken2211 } from "./fragment2211";

export const FRAGMENT_2212 = gql(`
  fragment Fragment2212 on Member251 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_251
    memberCount_251
    memberMetric_251
  }
`);

type FragmentResult2212 = ResultOf<typeof FRAGMENT_2212>;
type FragmentSelf2212 = NonNullable<FragmentResult2212>;

export type FragmentToken2212 =
  | FragmentSelf2212["__typename"]
  | FragmentSelf2212["typenameHint"] | FragmentToken2210 | FragmentToken2211;
