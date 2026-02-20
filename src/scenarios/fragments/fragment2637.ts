import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2635 } from "./fragment2635";
import type { FragmentToken2636 } from "./fragment2636";

export const FRAGMENT_2637 = gql(`
  fragment Fragment2637 on Member116 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_116
    memberCount_116
    memberMetric_116
  }
`);

type FragmentResult2637 = ResultOf<typeof FRAGMENT_2637>;
type FragmentSelf2637 = NonNullable<FragmentResult2637>;

export type FragmentToken2637 =
  | FragmentSelf2637["__typename"]
  | FragmentSelf2637["typenameHint"] | FragmentToken2635 | FragmentToken2636;
