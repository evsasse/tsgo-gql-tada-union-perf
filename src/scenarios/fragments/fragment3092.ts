import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3090 } from "./fragment3090";
import type { FragmentToken3091 } from "./fragment3091";

export const FRAGMENT_3092 = gql(`
  fragment Fragment3092 on Member11 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_11
    memberCount_11
    memberMetric_11
  }
`);

type FragmentResult3092 = ResultOf<typeof FRAGMENT_3092>;
type FragmentSelf3092 = NonNullable<FragmentResult3092>;

export type FragmentToken3092 =
  | FragmentSelf3092["__typename"]
  | FragmentSelf3092["typenameHint"] | FragmentToken3090 | FragmentToken3091;
