import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3276 } from "./fragment3276";
import type { FragmentToken3277 } from "./fragment3277";

export const FRAGMENT_3278 = gql(`
  fragment Fragment3278 on Member197 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_197
    memberCount_197
    memberMetric_197
  }
`);

type FragmentResult3278 = ResultOf<typeof FRAGMENT_3278>;
type FragmentSelf3278 = NonNullable<FragmentResult3278>;

export type FragmentToken3278 =
  | FragmentSelf3278["__typename"]
  | FragmentSelf3278["typenameHint"] | FragmentToken3276 | FragmentToken3277;
