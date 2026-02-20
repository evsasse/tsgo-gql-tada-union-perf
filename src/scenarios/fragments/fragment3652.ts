import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3650 } from "./fragment3650";
import type { FragmentToken3651 } from "./fragment3651";

export const FRAGMENT_3652 = gql(`
  fragment Fragment3652 on Member11 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_11
    memberCount_11
    memberMetric_11
  }
`);

type FragmentResult3652 = ResultOf<typeof FRAGMENT_3652>;
type FragmentSelf3652 = NonNullable<FragmentResult3652>;

export type FragmentToken3652 =
  | FragmentSelf3652["__typename"]
  | FragmentSelf3652["typenameHint"] | FragmentToken3650 | FragmentToken3651;
