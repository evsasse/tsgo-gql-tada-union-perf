import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3271 } from "./fragment3271";
import type { FragmentToken3272 } from "./fragment3272";

export const FRAGMENT_3273 = gql(`
  fragment Fragment3273 on Member192 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_192
    memberCount_192
    memberMetric_192
  }
`);

type FragmentResult3273 = ResultOf<typeof FRAGMENT_3273>;
type FragmentSelf3273 = NonNullable<FragmentResult3273>;

export type FragmentToken3273 =
  | FragmentSelf3273["__typename"]
  | FragmentSelf3273["typenameHint"] | FragmentToken3271 | FragmentToken3272;
