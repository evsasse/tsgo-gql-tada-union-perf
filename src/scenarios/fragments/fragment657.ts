import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken655 } from "./fragment655";
import type { FragmentToken656 } from "./fragment656";

export const FRAGMENT_657 = gql(`
  fragment Fragment657 on Member96 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_96
    memberCount_96
    memberMetric_96
  }
`);

type FragmentResult657 = ResultOf<typeof FRAGMENT_657>;
type FragmentSelf657 = NonNullable<FragmentResult657>;

export type FragmentToken657 =
  | FragmentSelf657["__typename"]
  | FragmentSelf657["typenameHint"] | FragmentToken655 | FragmentToken656;
