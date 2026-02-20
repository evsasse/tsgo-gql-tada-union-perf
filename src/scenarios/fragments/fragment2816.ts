import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2814 } from "./fragment2814";
import type { FragmentToken2815 } from "./fragment2815";

export const FRAGMENT_2816 = gql(`
  fragment Fragment2816 on Member15 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_15
    memberCount_15
    memberMetric_15
  }
`);

type FragmentResult2816 = ResultOf<typeof FRAGMENT_2816>;
type FragmentSelf2816 = NonNullable<FragmentResult2816>;

export type FragmentToken2816 =
  | FragmentSelf2816["__typename"]
  | FragmentSelf2816["typenameHint"] | FragmentToken2814 | FragmentToken2815;
