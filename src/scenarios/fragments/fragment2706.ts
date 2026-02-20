import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2704 } from "./fragment2704";
import type { FragmentToken2705 } from "./fragment2705";

export const FRAGMENT_2706 = gql(`
  fragment Fragment2706 on Member185 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_185
    memberCount_185
    memberMetric_185
  }
`);

type FragmentResult2706 = ResultOf<typeof FRAGMENT_2706>;
type FragmentSelf2706 = NonNullable<FragmentResult2706>;

export type FragmentToken2706 =
  | FragmentSelf2706["__typename"]
  | FragmentSelf2706["typenameHint"] | FragmentToken2704 | FragmentToken2705;
