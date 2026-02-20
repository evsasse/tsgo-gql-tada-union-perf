import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken381 } from "./fragment381";
import type { FragmentToken382 } from "./fragment382";

export const FRAGMENT_383 = gql(`
  fragment Fragment383 on Member102 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_102
    memberCount_102
    memberMetric_102
  }
`);

type FragmentResult383 = ResultOf<typeof FRAGMENT_383>;
type FragmentSelf383 = NonNullable<FragmentResult383>;

export type FragmentToken383 =
  | FragmentSelf383["__typename"]
  | FragmentSelf383["typenameHint"] | FragmentToken381 | FragmentToken382;
