import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3801 } from "./fragment3801";
import type { FragmentToken3802 } from "./fragment3802";

export const FRAGMENT_3803 = gql(`
  fragment Fragment3803 on Member162 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_162
    memberCount_162
    memberMetric_162
  }
`);

type FragmentResult3803 = ResultOf<typeof FRAGMENT_3803>;
type FragmentSelf3803 = NonNullable<FragmentResult3803>;

export type FragmentToken3803 =
  | FragmentSelf3803["__typename"]
  | FragmentSelf3803["typenameHint"] | FragmentToken3801 | FragmentToken3802;
