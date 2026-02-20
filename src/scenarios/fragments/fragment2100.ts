import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2098 } from "./fragment2098";
import type { FragmentToken2099 } from "./fragment2099";

export const FRAGMENT_2100 = gql(`
  fragment Fragment2100 on Member139 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_139
    memberCount_139
    memberMetric_139
  }
`);

type FragmentResult2100 = ResultOf<typeof FRAGMENT_2100>;
type FragmentSelf2100 = NonNullable<FragmentResult2100>;

export type FragmentToken2100 =
  | FragmentSelf2100["__typename"]
  | FragmentSelf2100["typenameHint"] | FragmentToken2098 | FragmentToken2099;
