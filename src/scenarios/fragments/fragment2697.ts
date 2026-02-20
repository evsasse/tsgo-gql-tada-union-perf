import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2695 } from "./fragment2695";
import type { FragmentToken2696 } from "./fragment2696";

export const FRAGMENT_2697 = gql(`
  fragment Fragment2697 on Member176 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_176
    memberCount_176
    memberMetric_176
  }
`);

type FragmentResult2697 = ResultOf<typeof FRAGMENT_2697>;
type FragmentSelf2697 = NonNullable<FragmentResult2697>;

export type FragmentToken2697 =
  | FragmentSelf2697["__typename"]
  | FragmentSelf2697["typenameHint"] | FragmentToken2695 | FragmentToken2696;
