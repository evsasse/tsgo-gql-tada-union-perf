import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2688 } from "./fragment2688";
import type { FragmentToken2689 } from "./fragment2689";

export const FRAGMENT_2690 = gql(`
  fragment Fragment2690 on Member169 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_169
    memberCount_169
    memberMetric_169
  }
`);

type FragmentResult2690 = ResultOf<typeof FRAGMENT_2690>;
type FragmentSelf2690 = NonNullable<FragmentResult2690>;

export type FragmentToken2690 =
  | FragmentSelf2690["__typename"]
  | FragmentSelf2690["typenameHint"] | FragmentToken2688 | FragmentToken2689;
