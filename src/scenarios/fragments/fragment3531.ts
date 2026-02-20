import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3529 } from "./fragment3529";
import type { FragmentToken3530 } from "./fragment3530";

export const FRAGMENT_3531 = gql(`
  fragment Fragment3531 on Member170 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_170
    memberCount_170
    memberMetric_170
  }
`);

type FragmentResult3531 = ResultOf<typeof FRAGMENT_3531>;
type FragmentSelf3531 = NonNullable<FragmentResult3531>;

export type FragmentToken3531 =
  | FragmentSelf3531["__typename"]
  | FragmentSelf3531["typenameHint"] | FragmentToken3529 | FragmentToken3530;
