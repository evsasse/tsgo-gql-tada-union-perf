import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3581 } from "./fragment3581";
import type { FragmentToken3582 } from "./fragment3582";

export const FRAGMENT_3583 = gql(`
  fragment Fragment3583 on Member222 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_222
    memberCount_222
    memberMetric_222
  }
`);

type FragmentResult3583 = ResultOf<typeof FRAGMENT_3583>;
type FragmentSelf3583 = NonNullable<FragmentResult3583>;

export type FragmentToken3583 =
  | FragmentSelf3583["__typename"]
  | FragmentSelf3583["typenameHint"] | FragmentToken3581 | FragmentToken3582;
