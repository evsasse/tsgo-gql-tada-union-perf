import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2657 } from "./fragment2657";
import type { FragmentToken2658 } from "./fragment2658";

export const FRAGMENT_2659 = gql(`
  fragment Fragment2659 on Member138 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_138
    memberCount_138
    memberMetric_138
  }
`);

type FragmentResult2659 = ResultOf<typeof FRAGMENT_2659>;
type FragmentSelf2659 = NonNullable<FragmentResult2659>;

export type FragmentToken2659 =
  | FragmentSelf2659["__typename"]
  | FragmentSelf2659["typenameHint"] | FragmentToken2657 | FragmentToken2658;
