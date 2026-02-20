import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2200 } from "./fragment2200";
import type { FragmentToken2201 } from "./fragment2201";

export const FRAGMENT_2202 = gql(`
  fragment Fragment2202 on Member241 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_241
    memberCount_241
    memberMetric_241
  }
`);

type FragmentResult2202 = ResultOf<typeof FRAGMENT_2202>;
type FragmentSelf2202 = NonNullable<FragmentResult2202>;

export type FragmentToken2202 =
  | FragmentSelf2202["__typename"]
  | FragmentSelf2202["typenameHint"] | FragmentToken2200 | FragmentToken2201;
