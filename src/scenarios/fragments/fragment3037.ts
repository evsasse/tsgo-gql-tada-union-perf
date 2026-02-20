import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3035 } from "./fragment3035";
import type { FragmentToken3036 } from "./fragment3036";

export const FRAGMENT_3037 = gql(`
  fragment Fragment3037 on Member236 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_236
    memberCount_236
    memberMetric_236
  }
`);

type FragmentResult3037 = ResultOf<typeof FRAGMENT_3037>;
type FragmentSelf3037 = NonNullable<FragmentResult3037>;

export type FragmentToken3037 =
  | FragmentSelf3037["__typename"]
  | FragmentSelf3037["typenameHint"] | FragmentToken3035 | FragmentToken3036;
