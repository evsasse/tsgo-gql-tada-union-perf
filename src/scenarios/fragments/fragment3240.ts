import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3238 } from "./fragment3238";
import type { FragmentToken3239 } from "./fragment3239";

export const FRAGMENT_3240 = gql(`
  fragment Fragment3240 on Member159 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_159
    memberCount_159
    memberMetric_159
  }
`);

type FragmentResult3240 = ResultOf<typeof FRAGMENT_3240>;
type FragmentSelf3240 = NonNullable<FragmentResult3240>;

export type FragmentToken3240 =
  | FragmentSelf3240["__typename"]
  | FragmentSelf3240["typenameHint"] | FragmentToken3238 | FragmentToken3239;
