import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2681 } from "./fragment2681";
import type { FragmentToken2682 } from "./fragment2682";

export const FRAGMENT_2683 = gql(`
  fragment Fragment2683 on Member162 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_162
    memberCount_162
    memberMetric_162
  }
`);

type FragmentResult2683 = ResultOf<typeof FRAGMENT_2683>;
type FragmentSelf2683 = NonNullable<FragmentResult2683>;

export type FragmentToken2683 =
  | FragmentSelf2683["__typename"]
  | FragmentSelf2683["typenameHint"] | FragmentToken2681 | FragmentToken2682;
