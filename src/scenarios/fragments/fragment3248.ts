import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3246 } from "./fragment3246";
import type { FragmentToken3247 } from "./fragment3247";

export const FRAGMENT_3248 = gql(`
  fragment Fragment3248 on Member167 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_167
    memberCount_167
    memberMetric_167
  }
`);

type FragmentResult3248 = ResultOf<typeof FRAGMENT_3248>;
type FragmentSelf3248 = NonNullable<FragmentResult3248>;

export type FragmentToken3248 =
  | FragmentSelf3248["__typename"]
  | FragmentSelf3248["typenameHint"] | FragmentToken3246 | FragmentToken3247;
