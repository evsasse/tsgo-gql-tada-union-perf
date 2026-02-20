import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2672 } from "./fragment2672";
import type { FragmentToken2673 } from "./fragment2673";

export const FRAGMENT_2674 = gql(`
  fragment Fragment2674 on Member153 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_153
    memberCount_153
    memberMetric_153
  }
`);

type FragmentResult2674 = ResultOf<typeof FRAGMENT_2674>;
type FragmentSelf2674 = NonNullable<FragmentResult2674>;

export type FragmentToken2674 =
  | FragmentSelf2674["__typename"]
  | FragmentSelf2674["typenameHint"] | FragmentToken2672 | FragmentToken2673;
