import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1049 } from "./fragment1049";
import type { FragmentToken1050 } from "./fragment1050";

export const FRAGMENT_1051 = gql(`
  fragment Fragment1051 on Member210 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_210
    memberCount_210
    memberMetric_210
  }
`);

type FragmentResult1051 = ResultOf<typeof FRAGMENT_1051>;
type FragmentSelf1051 = NonNullable<FragmentResult1051>;

export type FragmentToken1051 =
  | FragmentSelf1051["__typename"]
  | FragmentSelf1051["typenameHint"] | FragmentToken1049 | FragmentToken1050;
