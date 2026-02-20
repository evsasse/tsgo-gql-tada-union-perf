import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken315 } from "./fragment315";
import type { FragmentToken316 } from "./fragment316";

export const FRAGMENT_317 = gql(`
  fragment Fragment317 on Member36 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_36
    memberCount_36
    memberMetric_36
  }
`);

type FragmentResult317 = ResultOf<typeof FRAGMENT_317>;
type FragmentSelf317 = NonNullable<FragmentResult317>;

export type FragmentToken317 =
  | FragmentSelf317["__typename"]
  | FragmentSelf317["typenameHint"] | FragmentToken315 | FragmentToken316;
