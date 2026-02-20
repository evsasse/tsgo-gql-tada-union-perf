import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3275 } from "./fragment3275";
import type { FragmentToken3276 } from "./fragment3276";

export const FRAGMENT_3277 = gql(`
  fragment Fragment3277 on Member196 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_196
    memberCount_196
    memberMetric_196
  }
`);

type FragmentResult3277 = ResultOf<typeof FRAGMENT_3277>;
type FragmentSelf3277 = NonNullable<FragmentResult3277>;

export type FragmentToken3277 =
  | FragmentSelf3277["__typename"]
  | FragmentSelf3277["typenameHint"] | FragmentToken3275 | FragmentToken3276;
