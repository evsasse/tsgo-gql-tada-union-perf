import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken049 } from "./fragment049";
import type { FragmentToken050 } from "./fragment050";

export const FRAGMENT_051 = gql(`
  fragment Fragment051 on Member50 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_50
    memberCount_50
    memberMetric_50
  }
`);

type FragmentResult051 = ResultOf<typeof FRAGMENT_051>;
type FragmentSelf051 = NonNullable<FragmentResult051>;

export type FragmentToken051 =
  | FragmentSelf051["__typename"]
  | FragmentSelf051["typenameHint"] | FragmentToken049 | FragmentToken050;
