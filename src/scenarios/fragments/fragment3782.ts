import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3780 } from "./fragment3780";
import type { FragmentToken3781 } from "./fragment3781";

export const FRAGMENT_3782 = gql(`
  fragment Fragment3782 on Member141 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_141
    memberCount_141
    memberMetric_141
  }
`);

type FragmentResult3782 = ResultOf<typeof FRAGMENT_3782>;
type FragmentSelf3782 = NonNullable<FragmentResult3782>;

export type FragmentToken3782 =
  | FragmentSelf3782["__typename"]
  | FragmentSelf3782["typenameHint"] | FragmentToken3780 | FragmentToken3781;
