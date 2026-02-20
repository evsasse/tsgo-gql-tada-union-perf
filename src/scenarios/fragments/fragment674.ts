import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken672 } from "./fragment672";
import type { FragmentToken673 } from "./fragment673";

export const FRAGMENT_674 = gql(`
  fragment Fragment674 on Member113 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_113
    memberCount_113
    memberMetric_113
  }
`);

type FragmentResult674 = ResultOf<typeof FRAGMENT_674>;
type FragmentSelf674 = NonNullable<FragmentResult674>;

export type FragmentToken674 =
  | FragmentSelf674["__typename"]
  | FragmentSelf674["typenameHint"] | FragmentToken672 | FragmentToken673;
