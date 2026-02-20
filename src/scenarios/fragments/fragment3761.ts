import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3759 } from "./fragment3759";
import type { FragmentToken3760 } from "./fragment3760";

export const FRAGMENT_3761 = gql(`
  fragment Fragment3761 on Member120 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_120
    memberCount_120
    memberMetric_120
  }
`);

type FragmentResult3761 = ResultOf<typeof FRAGMENT_3761>;
type FragmentSelf3761 = NonNullable<FragmentResult3761>;

export type FragmentToken3761 =
  | FragmentSelf3761["__typename"]
  | FragmentSelf3761["typenameHint"] | FragmentToken3759 | FragmentToken3760;
