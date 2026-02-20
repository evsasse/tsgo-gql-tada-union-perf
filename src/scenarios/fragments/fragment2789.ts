import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2787 } from "./fragment2787";
import type { FragmentToken2788 } from "./fragment2788";

export const FRAGMENT_2789 = gql(`
  fragment Fragment2789 on Member268 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_268
    memberCount_268
    memberMetric_268
  }
`);

type FragmentResult2789 = ResultOf<typeof FRAGMENT_2789>;
type FragmentSelf2789 = NonNullable<FragmentResult2789>;

export type FragmentToken2789 =
  | FragmentSelf2789["__typename"]
  | FragmentSelf2789["typenameHint"] | FragmentToken2787 | FragmentToken2788;
