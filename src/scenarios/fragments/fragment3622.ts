import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3620 } from "./fragment3620";
import type { FragmentToken3621 } from "./fragment3621";

export const FRAGMENT_3622 = gql(`
  fragment Fragment3622 on Member261 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_261
    memberCount_261
    memberMetric_261
  }
`);

type FragmentResult3622 = ResultOf<typeof FRAGMENT_3622>;
type FragmentSelf3622 = NonNullable<FragmentResult3622>;

export type FragmentToken3622 =
  | FragmentSelf3622["__typename"]
  | FragmentSelf3622["typenameHint"] | FragmentToken3620 | FragmentToken3621;
