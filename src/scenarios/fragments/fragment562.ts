import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken560 } from "./fragment560";
import type { FragmentToken561 } from "./fragment561";

export const FRAGMENT_562 = gql(`
  fragment Fragment562 on Member01 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_01
    memberCount_01
    memberMetric_01
  }
`);

type FragmentResult562 = ResultOf<typeof FRAGMENT_562>;
type FragmentSelf562 = NonNullable<FragmentResult562>;

export type FragmentToken562 =
  | FragmentSelf562["__typename"]
  | FragmentSelf562["typenameHint"] | FragmentToken560 | FragmentToken561;
