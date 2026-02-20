import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3525 } from "./fragment3525";
import type { FragmentToken3526 } from "./fragment3526";

export const FRAGMENT_3527 = gql(`
  fragment Fragment3527 on Member166 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_166
    memberCount_166
    memberMetric_166
  }
`);

type FragmentResult3527 = ResultOf<typeof FRAGMENT_3527>;
type FragmentSelf3527 = NonNullable<FragmentResult3527>;

export type FragmentToken3527 =
  | FragmentSelf3527["__typename"]
  | FragmentSelf3527["typenameHint"] | FragmentToken3525 | FragmentToken3526;
