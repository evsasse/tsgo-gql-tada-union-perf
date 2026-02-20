import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2351 } from "./fragment2351";
import type { FragmentToken2352 } from "./fragment2352";

export const FRAGMENT_2353 = gql(`
  fragment Fragment2353 on Member112 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_112
    memberCount_112
    memberMetric_112
  }
`);

type FragmentResult2353 = ResultOf<typeof FRAGMENT_2353>;
type FragmentSelf2353 = NonNullable<FragmentResult2353>;

export type FragmentToken2353 =
  | FragmentSelf2353["__typename"]
  | FragmentSelf2353["typenameHint"] | FragmentToken2351 | FragmentToken2352;
