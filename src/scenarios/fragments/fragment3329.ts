import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3327 } from "./fragment3327";
import type { FragmentToken3328 } from "./fragment3328";

export const FRAGMENT_3329 = gql(`
  fragment Fragment3329 on Member248 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_248
    memberCount_248
    memberMetric_248
  }
`);

type FragmentResult3329 = ResultOf<typeof FRAGMENT_3329>;
type FragmentSelf3329 = NonNullable<FragmentResult3329>;

export type FragmentToken3329 =
  | FragmentSelf3329["__typename"]
  | FragmentSelf3329["typenameHint"] | FragmentToken3327 | FragmentToken3328;
