import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2060 } from "./fragment2060";
import type { FragmentToken2061 } from "./fragment2061";

export const FRAGMENT_2062 = gql(`
  fragment Fragment2062 on Member101 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_101
    memberCount_101
    memberMetric_101
  }
`);

type FragmentResult2062 = ResultOf<typeof FRAGMENT_2062>;
type FragmentSelf2062 = NonNullable<FragmentResult2062>;

export type FragmentToken2062 =
  | FragmentSelf2062["__typename"]
  | FragmentSelf2062["typenameHint"] | FragmentToken2060 | FragmentToken2061;
