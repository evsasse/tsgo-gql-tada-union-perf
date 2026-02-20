import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2637 } from "./fragment2637";
import type { FragmentToken2638 } from "./fragment2638";

export const FRAGMENT_2639 = gql(`
  fragment Fragment2639 on Member118 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_118
    memberCount_118
    memberMetric_118
  }
`);

type FragmentResult2639 = ResultOf<typeof FRAGMENT_2639>;
type FragmentSelf2639 = NonNullable<FragmentResult2639>;

export type FragmentToken2639 =
  | FragmentSelf2639["__typename"]
  | FragmentSelf2639["typenameHint"] | FragmentToken2637 | FragmentToken2638;
