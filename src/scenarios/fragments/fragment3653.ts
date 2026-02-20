import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3651 } from "./fragment3651";
import type { FragmentToken3652 } from "./fragment3652";

export const FRAGMENT_3653 = gql(`
  fragment Fragment3653 on Member12 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_12
    memberCount_12
    memberMetric_12
  }
`);

type FragmentResult3653 = ResultOf<typeof FRAGMENT_3653>;
type FragmentSelf3653 = NonNullable<FragmentResult3653>;

export type FragmentToken3653 =
  | FragmentSelf3653["__typename"]
  | FragmentSelf3653["typenameHint"] | FragmentToken3651 | FragmentToken3652;
