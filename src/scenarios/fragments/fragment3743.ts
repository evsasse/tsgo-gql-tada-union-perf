import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3741 } from "./fragment3741";
import type { FragmentToken3742 } from "./fragment3742";

export const FRAGMENT_3743 = gql(`
  fragment Fragment3743 on Member102 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_102
    memberCount_102
    memberMetric_102
  }
`);

type FragmentResult3743 = ResultOf<typeof FRAGMENT_3743>;
type FragmentSelf3743 = NonNullable<FragmentResult3743>;

export type FragmentToken3743 =
  | FragmentSelf3743["__typename"]
  | FragmentSelf3743["typenameHint"] | FragmentToken3741 | FragmentToken3742;
