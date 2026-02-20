import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3689 } from "./fragment3689";
import type { FragmentToken3690 } from "./fragment3690";

export const FRAGMENT_3691 = gql(`
  fragment Fragment3691 on Member50 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_50
    memberCount_50
    memberMetric_50
  }
`);

type FragmentResult3691 = ResultOf<typeof FRAGMENT_3691>;
type FragmentSelf3691 = NonNullable<FragmentResult3691>;

export type FragmentToken3691 =
  | FragmentSelf3691["__typename"]
  | FragmentSelf3691["typenameHint"] | FragmentToken3689 | FragmentToken3690;
