import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2452 } from "./fragment2452";
import type { FragmentToken2453 } from "./fragment2453";

export const FRAGMENT_2454 = gql(`
  fragment Fragment2454 on Member213 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_213
    memberCount_213
    memberMetric_213
  }
`);

type FragmentResult2454 = ResultOf<typeof FRAGMENT_2454>;
type FragmentSelf2454 = NonNullable<FragmentResult2454>;

export type FragmentToken2454 =
  | FragmentSelf2454["__typename"]
  | FragmentSelf2454["typenameHint"] | FragmentToken2452 | FragmentToken2453;
