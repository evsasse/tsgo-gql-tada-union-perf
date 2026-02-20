import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3237 } from "./fragment3237";
import type { FragmentToken3238 } from "./fragment3238";

export const FRAGMENT_3239 = gql(`
  fragment Fragment3239 on Member158 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_158
    memberCount_158
    memberMetric_158
  }
`);

type FragmentResult3239 = ResultOf<typeof FRAGMENT_3239>;
type FragmentSelf3239 = NonNullable<FragmentResult3239>;

export type FragmentToken3239 =
  | FragmentSelf3239["__typename"]
  | FragmentSelf3239["typenameHint"] | FragmentToken3237 | FragmentToken3238;
