import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3773 } from "./fragment3773";
import type { FragmentToken3774 } from "./fragment3774";

export const FRAGMENT_3775 = gql(`
  fragment Fragment3775 on Member134 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_134
    memberCount_134
    memberMetric_134
  }
`);

type FragmentResult3775 = ResultOf<typeof FRAGMENT_3775>;
type FragmentSelf3775 = NonNullable<FragmentResult3775>;

export type FragmentToken3775 =
  | FragmentSelf3775["__typename"]
  | FragmentSelf3775["typenameHint"] | FragmentToken3773 | FragmentToken3774;
