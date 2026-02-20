import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2793 } from "./fragment2793";
import type { FragmentToken2794 } from "./fragment2794";

export const FRAGMENT_2795 = gql(`
  fragment Fragment2795 on Member274 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_274
    memberCount_274
    memberMetric_274
  }
`);

type FragmentResult2795 = ResultOf<typeof FRAGMENT_2795>;
type FragmentSelf2795 = NonNullable<FragmentResult2795>;

export type FragmentToken2795 =
  | FragmentSelf2795["__typename"]
  | FragmentSelf2795["typenameHint"] | FragmentToken2793 | FragmentToken2794;
