import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2247 } from "./fragment2247";
import type { FragmentToken2248 } from "./fragment2248";

export const FRAGMENT_2249 = gql(`
  fragment Fragment2249 on Member08 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_08
    memberCount_08
    memberMetric_08
  }
`);

type FragmentResult2249 = ResultOf<typeof FRAGMENT_2249>;
type FragmentSelf2249 = NonNullable<FragmentResult2249>;

export type FragmentToken2249 =
  | FragmentSelf2249["__typename"]
  | FragmentSelf2249["typenameHint"] | FragmentToken2247 | FragmentToken2248;
