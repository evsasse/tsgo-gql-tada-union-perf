import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3191 } from "./fragment3191";
import type { FragmentToken3192 } from "./fragment3192";

export const FRAGMENT_3193 = gql(`
  fragment Fragment3193 on Member112 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_112
    memberCount_112
    memberMetric_112
  }
`);

type FragmentResult3193 = ResultOf<typeof FRAGMENT_3193>;
type FragmentSelf3193 = NonNullable<FragmentResult3193>;

export type FragmentToken3193 =
  | FragmentSelf3193["__typename"]
  | FragmentSelf3193["typenameHint"] | FragmentToken3191 | FragmentToken3192;
