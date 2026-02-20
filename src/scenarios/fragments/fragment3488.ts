import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3486 } from "./fragment3486";
import type { FragmentToken3487 } from "./fragment3487";

export const FRAGMENT_3488 = gql(`
  fragment Fragment3488 on Member127 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_127
    memberCount_127
    memberMetric_127
  }
`);

type FragmentResult3488 = ResultOf<typeof FRAGMENT_3488>;
type FragmentSelf3488 = NonNullable<FragmentResult3488>;

export type FragmentToken3488 =
  | FragmentSelf3488["__typename"]
  | FragmentSelf3488["typenameHint"] | FragmentToken3486 | FragmentToken3487;
