import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2398 } from "./fragment2398";
import type { FragmentToken2399 } from "./fragment2399";

export const FRAGMENT_2400 = gql(`
  fragment Fragment2400 on Member159 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_159
    memberCount_159
    memberMetric_159
  }
`);

type FragmentResult2400 = ResultOf<typeof FRAGMENT_2400>;
type FragmentSelf2400 = NonNullable<FragmentResult2400>;

export type FragmentToken2400 =
  | FragmentSelf2400["__typename"]
  | FragmentSelf2400["typenameHint"] | FragmentToken2398 | FragmentToken2399;
