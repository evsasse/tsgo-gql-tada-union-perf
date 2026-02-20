import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2157 } from "./fragment2157";
import type { FragmentToken2158 } from "./fragment2158";

export const FRAGMENT_2159 = gql(`
  fragment Fragment2159 on Member198 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_198
    memberCount_198
    memberMetric_198
  }
`);

type FragmentResult2159 = ResultOf<typeof FRAGMENT_2159>;
type FragmentSelf2159 = NonNullable<FragmentResult2159>;

export type FragmentToken2159 =
  | FragmentSelf2159["__typename"]
  | FragmentSelf2159["typenameHint"] | FragmentToken2157 | FragmentToken2158;
