import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken576 } from "./fragment576";
import type { FragmentToken577 } from "./fragment577";

export const FRAGMENT_578 = gql(`
  fragment Fragment578 on Member17 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_17
    memberCount_17
    memberMetric_17
  }
`);

type FragmentResult578 = ResultOf<typeof FRAGMENT_578>;
type FragmentSelf578 = NonNullable<FragmentResult578>;

export type FragmentToken578 =
  | FragmentSelf578["__typename"]
  | FragmentSelf578["typenameHint"] | FragmentToken576 | FragmentToken577;
