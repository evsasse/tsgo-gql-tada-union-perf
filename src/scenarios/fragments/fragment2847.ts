import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2845 } from "./fragment2845";
import type { FragmentToken2846 } from "./fragment2846";

export const FRAGMENT_2847 = gql(`
  fragment Fragment2847 on Member46 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_46
    memberCount_46
    memberMetric_46
  }
`);

type FragmentResult2847 = ResultOf<typeof FRAGMENT_2847>;
type FragmentSelf2847 = NonNullable<FragmentResult2847>;

export type FragmentToken2847 =
  | FragmentSelf2847["__typename"]
  | FragmentSelf2847["typenameHint"] | FragmentToken2845 | FragmentToken2846;
