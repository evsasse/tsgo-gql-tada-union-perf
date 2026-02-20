import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3789 } from "./fragment3789";
import type { FragmentToken3790 } from "./fragment3790";

export const FRAGMENT_3791 = gql(`
  fragment Fragment3791 on Member150 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_150
    memberCount_150
    memberMetric_150
  }
`);

type FragmentResult3791 = ResultOf<typeof FRAGMENT_3791>;
type FragmentSelf3791 = NonNullable<FragmentResult3791>;

export type FragmentToken3791 =
  | FragmentSelf3791["__typename"]
  | FragmentSelf3791["typenameHint"] | FragmentToken3789 | FragmentToken3790;
