import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2658 } from "./fragment2658";
import type { FragmentToken2659 } from "./fragment2659";

export const FRAGMENT_2660 = gql(`
  fragment Fragment2660 on Member139 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_139
    memberCount_139
    memberMetric_139
  }
`);

type FragmentResult2660 = ResultOf<typeof FRAGMENT_2660>;
type FragmentSelf2660 = NonNullable<FragmentResult2660>;

export type FragmentToken2660 =
  | FragmentSelf2660["__typename"]
  | FragmentSelf2660["typenameHint"] | FragmentToken2658 | FragmentToken2659;
