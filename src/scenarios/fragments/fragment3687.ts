import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3685 } from "./fragment3685";
import type { FragmentToken3686 } from "./fragment3686";

export const FRAGMENT_3687 = gql(`
  fragment Fragment3687 on Member46 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_46
    memberCount_46
    memberMetric_46
  }
`);

type FragmentResult3687 = ResultOf<typeof FRAGMENT_3687>;
type FragmentSelf3687 = NonNullable<FragmentResult3687>;

export type FragmentToken3687 =
  | FragmentSelf3687["__typename"]
  | FragmentSelf3687["typenameHint"] | FragmentToken3685 | FragmentToken3686;
