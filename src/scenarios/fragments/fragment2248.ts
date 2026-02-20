import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2246 } from "./fragment2246";
import type { FragmentToken2247 } from "./fragment2247";

export const FRAGMENT_2248 = gql(`
  fragment Fragment2248 on Member07 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_07
    memberCount_07
    memberMetric_07
  }
`);

type FragmentResult2248 = ResultOf<typeof FRAGMENT_2248>;
type FragmentSelf2248 = NonNullable<FragmentResult2248>;

export type FragmentToken2248 =
  | FragmentSelf2248["__typename"]
  | FragmentSelf2248["typenameHint"] | FragmentToken2246 | FragmentToken2247;
