import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3034 } from "./fragment3034";
import type { FragmentToken3035 } from "./fragment3035";

export const FRAGMENT_3036 = gql(`
  fragment Fragment3036 on Member235 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_235
    memberCount_235
    memberMetric_235
  }
`);

type FragmentResult3036 = ResultOf<typeof FRAGMENT_3036>;
type FragmentSelf3036 = NonNullable<FragmentResult3036>;

export type FragmentToken3036 =
  | FragmentSelf3036["__typename"]
  | FragmentSelf3036["typenameHint"] | FragmentToken3034 | FragmentToken3035;
