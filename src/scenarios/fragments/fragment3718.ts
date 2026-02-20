import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3716 } from "./fragment3716";
import type { FragmentToken3717 } from "./fragment3717";

export const FRAGMENT_3718 = gql(`
  fragment Fragment3718 on Member77 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_77
    memberCount_77
    memberMetric_77
  }
`);

type FragmentResult3718 = ResultOf<typeof FRAGMENT_3718>;
type FragmentSelf3718 = NonNullable<FragmentResult3718>;

export type FragmentToken3718 =
  | FragmentSelf3718["__typename"]
  | FragmentSelf3718["typenameHint"] | FragmentToken3716 | FragmentToken3717;
