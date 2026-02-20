import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2674 } from "./fragment2674";
import type { FragmentToken2675 } from "./fragment2675";

export const FRAGMENT_2676 = gql(`
  fragment Fragment2676 on Member155 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_155
    memberCount_155
    memberMetric_155
  }
`);

type FragmentResult2676 = ResultOf<typeof FRAGMENT_2676>;
type FragmentSelf2676 = NonNullable<FragmentResult2676>;

export type FragmentToken2676 =
  | FragmentSelf2676["__typename"]
  | FragmentSelf2676["typenameHint"] | FragmentToken2674 | FragmentToken2675;
