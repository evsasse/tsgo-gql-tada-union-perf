import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2696 } from "./fragment2696";
import type { FragmentToken2697 } from "./fragment2697";

export const FRAGMENT_2698 = gql(`
  fragment Fragment2698 on Member177 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_177
    memberCount_177
    memberMetric_177
  }
`);

type FragmentResult2698 = ResultOf<typeof FRAGMENT_2698>;
type FragmentSelf2698 = NonNullable<FragmentResult2698>;

export type FragmentToken2698 =
  | FragmentSelf2698["__typename"]
  | FragmentSelf2698["typenameHint"] | FragmentToken2696 | FragmentToken2697;
