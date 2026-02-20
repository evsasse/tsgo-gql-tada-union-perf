import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3640 } from "./fragment3640";
import type { FragmentToken3641 } from "./fragment3641";

export const FRAGMENT_3642 = gql(`
  fragment Fragment3642 on Member01 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_01
    memberCount_01
    memberMetric_01
  }
`);

type FragmentResult3642 = ResultOf<typeof FRAGMENT_3642>;
type FragmentSelf3642 = NonNullable<FragmentResult3642>;

export type FragmentToken3642 =
  | FragmentSelf3642["__typename"]
  | FragmentSelf3642["typenameHint"] | FragmentToken3640 | FragmentToken3641;
