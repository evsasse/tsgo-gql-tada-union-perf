import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2114 } from "./fragment2114";
import type { FragmentToken2115 } from "./fragment2115";

export const FRAGMENT_2116 = gql(`
  fragment Fragment2116 on Member155 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_155
    memberCount_155
    memberMetric_155
  }
`);

type FragmentResult2116 = ResultOf<typeof FRAGMENT_2116>;
type FragmentSelf2116 = NonNullable<FragmentResult2116>;

export type FragmentToken2116 =
  | FragmentSelf2116["__typename"]
  | FragmentSelf2116["typenameHint"] | FragmentToken2114 | FragmentToken2115;
