import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken314 } from "./fragment314";
import type { FragmentToken315 } from "./fragment315";

export const FRAGMENT_316 = gql(`
  fragment Fragment316 on Member35 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_35
    memberCount_35
    memberMetric_35
  }
`);

type FragmentResult316 = ResultOf<typeof FRAGMENT_316>;
type FragmentSelf316 = NonNullable<FragmentResult316>;

export type FragmentToken316 =
  | FragmentSelf316["__typename"]
  | FragmentSelf316["typenameHint"] | FragmentToken314 | FragmentToken315;
