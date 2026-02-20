import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3513 } from "./fragment3513";
import type { FragmentToken3514 } from "./fragment3514";

export const FRAGMENT_3515 = gql(`
  fragment Fragment3515 on Member154 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_154
    memberCount_154
    memberMetric_154
  }
`);

type FragmentResult3515 = ResultOf<typeof FRAGMENT_3515>;
type FragmentSelf3515 = NonNullable<FragmentResult3515>;

export type FragmentToken3515 =
  | FragmentSelf3515["__typename"]
  | FragmentSelf3515["typenameHint"] | FragmentToken3513 | FragmentToken3514;
