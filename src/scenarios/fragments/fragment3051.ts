import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3049 } from "./fragment3049";
import type { FragmentToken3050 } from "./fragment3050";

export const FRAGMENT_3051 = gql(`
  fragment Fragment3051 on Member250 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_250
    memberCount_250
    memberMetric_250
  }
`);

type FragmentResult3051 = ResultOf<typeof FRAGMENT_3051>;
type FragmentSelf3051 = NonNullable<FragmentResult3051>;

export type FragmentToken3051 =
  | FragmentSelf3051["__typename"]
  | FragmentSelf3051["typenameHint"] | FragmentToken3049 | FragmentToken3050;
