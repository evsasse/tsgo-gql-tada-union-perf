import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3672 } from "./fragment3672";
import type { FragmentToken3673 } from "./fragment3673";

export const FRAGMENT_3674 = gql(`
  fragment Fragment3674 on Member33 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_33
    memberCount_33
    memberMetric_33
  }
`);

type FragmentResult3674 = ResultOf<typeof FRAGMENT_3674>;
type FragmentSelf3674 = NonNullable<FragmentResult3674>;

export type FragmentToken3674 =
  | FragmentSelf3674["__typename"]
  | FragmentSelf3674["typenameHint"] | FragmentToken3672 | FragmentToken3673;
