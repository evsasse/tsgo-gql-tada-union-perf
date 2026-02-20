import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3244 } from "./fragment3244";
import type { FragmentToken3245 } from "./fragment3245";

export const FRAGMENT_3246 = gql(`
  fragment Fragment3246 on Member165 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_165
    memberCount_165
    memberMetric_165
  }
`);

type FragmentResult3246 = ResultOf<typeof FRAGMENT_3246>;
type FragmentSelf3246 = NonNullable<FragmentResult3246>;

export type FragmentToken3246 =
  | FragmentSelf3246["__typename"]
  | FragmentSelf3246["typenameHint"] | FragmentToken3244 | FragmentToken3245;
