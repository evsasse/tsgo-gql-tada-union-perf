import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3693 } from "./fragment3693";
import type { FragmentToken3694 } from "./fragment3694";

export const FRAGMENT_3695 = gql(`
  fragment Fragment3695 on Member54 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_54
    memberCount_54
    memberMetric_54
  }
`);

type FragmentResult3695 = ResultOf<typeof FRAGMENT_3695>;
type FragmentSelf3695 = NonNullable<FragmentResult3695>;

export type FragmentToken3695 =
  | FragmentSelf3695["__typename"]
  | FragmentSelf3695["typenameHint"] | FragmentToken3693 | FragmentToken3694;
