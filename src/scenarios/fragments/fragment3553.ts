import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3551 } from "./fragment3551";
import type { FragmentToken3552 } from "./fragment3552";

export const FRAGMENT_3553 = gql(`
  fragment Fragment3553 on Member192 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_192
    memberCount_192
    memberMetric_192
  }
`);

type FragmentResult3553 = ResultOf<typeof FRAGMENT_3553>;
type FragmentSelf3553 = NonNullable<FragmentResult3553>;

export type FragmentToken3553 =
  | FragmentSelf3553["__typename"]
  | FragmentSelf3553["typenameHint"] | FragmentToken3551 | FragmentToken3552;
