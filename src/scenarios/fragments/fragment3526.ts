import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3524 } from "./fragment3524";
import type { FragmentToken3525 } from "./fragment3525";

export const FRAGMENT_3526 = gql(`
  fragment Fragment3526 on Member165 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_165
    memberCount_165
    memberMetric_165
  }
`);

type FragmentResult3526 = ResultOf<typeof FRAGMENT_3526>;
type FragmentSelf3526 = NonNullable<FragmentResult3526>;

export type FragmentToken3526 =
  | FragmentSelf3526["__typename"]
  | FragmentSelf3526["typenameHint"] | FragmentToken3524 | FragmentToken3525;
