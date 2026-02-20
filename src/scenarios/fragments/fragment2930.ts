import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2928 } from "./fragment2928";
import type { FragmentToken2929 } from "./fragment2929";

export const FRAGMENT_2930 = gql(`
  fragment Fragment2930 on Member129 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_129
    memberCount_129
    memberMetric_129
  }
`);

type FragmentResult2930 = ResultOf<typeof FRAGMENT_2930>;
type FragmentSelf2930 = NonNullable<FragmentResult2930>;

export type FragmentToken2930 =
  | FragmentSelf2930["__typename"]
  | FragmentSelf2930["typenameHint"] | FragmentToken2928 | FragmentToken2929;
