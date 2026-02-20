import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3549 } from "./fragment3549";
import type { FragmentToken3550 } from "./fragment3550";

export const FRAGMENT_3551 = gql(`
  fragment Fragment3551 on Member190 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_190
    memberCount_190
    memberMetric_190
  }
`);

type FragmentResult3551 = ResultOf<typeof FRAGMENT_3551>;
type FragmentSelf3551 = NonNullable<FragmentResult3551>;

export type FragmentToken3551 =
  | FragmentSelf3551["__typename"]
  | FragmentSelf3551["typenameHint"] | FragmentToken3549 | FragmentToken3550;
