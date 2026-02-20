import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3779 } from "./fragment3779";
import type { FragmentToken3780 } from "./fragment3780";

export const FRAGMENT_3781 = gql(`
  fragment Fragment3781 on Member140 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_140
    memberCount_140
    memberMetric_140
  }
`);

type FragmentResult3781 = ResultOf<typeof FRAGMENT_3781>;
type FragmentSelf3781 = NonNullable<FragmentResult3781>;

export type FragmentToken3781 =
  | FragmentSelf3781["__typename"]
  | FragmentSelf3781["typenameHint"] | FragmentToken3779 | FragmentToken3780;
