import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken317 } from "./fragment317";
import type { FragmentToken318 } from "./fragment318";

export const FRAGMENT_319 = gql(`
  fragment Fragment319 on Member38 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_38
    memberCount_38
    memberMetric_38
  }
`);

type FragmentResult319 = ResultOf<typeof FRAGMENT_319>;
type FragmentSelf319 = NonNullable<FragmentResult319>;

export type FragmentToken319 =
  | FragmentSelf319["__typename"]
  | FragmentSelf319["typenameHint"] | FragmentToken317 | FragmentToken318;
