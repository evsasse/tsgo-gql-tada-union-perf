import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3289 } from "./fragment3289";
import type { FragmentToken3290 } from "./fragment3290";

export const FRAGMENT_3291 = gql(`
  fragment Fragment3291 on Member210 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_210
    memberCount_210
    memberMetric_210
  }
`);

type FragmentResult3291 = ResultOf<typeof FRAGMENT_3291>;
type FragmentSelf3291 = NonNullable<FragmentResult3291>;

export type FragmentToken3291 =
  | FragmentSelf3291["__typename"]
  | FragmentSelf3291["typenameHint"] | FragmentToken3289 | FragmentToken3290;
