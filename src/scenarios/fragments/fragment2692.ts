import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2690 } from "./fragment2690";
import type { FragmentToken2691 } from "./fragment2691";

export const FRAGMENT_2692 = gql(`
  fragment Fragment2692 on Member171 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_171
    memberCount_171
    memberMetric_171
  }
`);

type FragmentResult2692 = ResultOf<typeof FRAGMENT_2692>;
type FragmentSelf2692 = NonNullable<FragmentResult2692>;

export type FragmentToken2692 =
  | FragmentSelf2692["__typename"]
  | FragmentSelf2692["typenameHint"] | FragmentToken2690 | FragmentToken2691;
