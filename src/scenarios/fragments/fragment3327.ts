import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3325 } from "./fragment3325";
import type { FragmentToken3326 } from "./fragment3326";

export const FRAGMENT_3327 = gql(`
  fragment Fragment3327 on Member246 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_246
    memberCount_246
    memberMetric_246
  }
`);

type FragmentResult3327 = ResultOf<typeof FRAGMENT_3327>;
type FragmentSelf3327 = NonNullable<FragmentResult3327>;

export type FragmentToken3327 =
  | FragmentSelf3327["__typename"]
  | FragmentSelf3327["typenameHint"] | FragmentToken3325 | FragmentToken3326;
