import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2773 } from "./fragment2773";
import type { FragmentToken2774 } from "./fragment2774";

export const FRAGMENT_2775 = gql(`
  fragment Fragment2775 on Member254 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_254
    memberCount_254
    memberMetric_254
  }
`);

type FragmentResult2775 = ResultOf<typeof FRAGMENT_2775>;
type FragmentSelf2775 = NonNullable<FragmentResult2775>;

export type FragmentToken2775 =
  | FragmentSelf2775["__typename"]
  | FragmentSelf2775["typenameHint"] | FragmentToken2773 | FragmentToken2774;
