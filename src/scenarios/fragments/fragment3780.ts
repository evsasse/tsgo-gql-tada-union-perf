import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3778 } from "./fragment3778";
import type { FragmentToken3779 } from "./fragment3779";

export const FRAGMENT_3780 = gql(`
  fragment Fragment3780 on Member139 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_139
    memberCount_139
    memberMetric_139
  }
`);

type FragmentResult3780 = ResultOf<typeof FRAGMENT_3780>;
type FragmentSelf3780 = NonNullable<FragmentResult3780>;

export type FragmentToken3780 =
  | FragmentSelf3780["__typename"]
  | FragmentSelf3780["typenameHint"] | FragmentToken3778 | FragmentToken3779;
