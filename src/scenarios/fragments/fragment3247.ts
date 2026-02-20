import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3245 } from "./fragment3245";
import type { FragmentToken3246 } from "./fragment3246";

export const FRAGMENT_3247 = gql(`
  fragment Fragment3247 on Member166 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_166
    memberCount_166
    memberMetric_166
  }
`);

type FragmentResult3247 = ResultOf<typeof FRAGMENT_3247>;
type FragmentSelf3247 = NonNullable<FragmentResult3247>;

export type FragmentToken3247 =
  | FragmentSelf3247["__typename"]
  | FragmentSelf3247["typenameHint"] | FragmentToken3245 | FragmentToken3246;
