import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2107 } from "./fragment2107";
import type { FragmentToken2108 } from "./fragment2108";

export const FRAGMENT_2109 = gql(`
  fragment Fragment2109 on Member148 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_148
    memberCount_148
    memberMetric_148
  }
`);

type FragmentResult2109 = ResultOf<typeof FRAGMENT_2109>;
type FragmentSelf2109 = NonNullable<FragmentResult2109>;

export type FragmentToken2109 =
  | FragmentSelf2109["__typename"]
  | FragmentSelf2109["typenameHint"] | FragmentToken2107 | FragmentToken2108;
