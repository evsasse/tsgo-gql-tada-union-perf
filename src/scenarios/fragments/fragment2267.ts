import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2265 } from "./fragment2265";
import type { FragmentToken2266 } from "./fragment2266";

export const FRAGMENT_2267 = gql(`
  fragment Fragment2267 on Member26 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_26
    memberCount_26
    memberMetric_26
  }
`);

type FragmentResult2267 = ResultOf<typeof FRAGMENT_2267>;
type FragmentSelf2267 = NonNullable<FragmentResult2267>;

export type FragmentToken2267 =
  | FragmentSelf2267["__typename"]
  | FragmentSelf2267["typenameHint"] | FragmentToken2265 | FragmentToken2266;
