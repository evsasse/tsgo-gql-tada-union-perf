import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3016 } from "./fragment3016";
import type { FragmentToken3017 } from "./fragment3017";

export const FRAGMENT_3018 = gql(`
  fragment Fragment3018 on Member217 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_217
    memberCount_217
    memberMetric_217
  }
`);

type FragmentResult3018 = ResultOf<typeof FRAGMENT_3018>;
type FragmentSelf3018 = NonNullable<FragmentResult3018>;

export type FragmentToken3018 =
  | FragmentSelf3018["__typename"]
  | FragmentSelf3018["typenameHint"] | FragmentToken3016 | FragmentToken3017;
