import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3333 } from "./fragment3333";
import type { FragmentToken3334 } from "./fragment3334";

export const FRAGMENT_3335 = gql(`
  fragment Fragment3335 on Member254 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_254
    memberCount_254
    memberMetric_254
  }
`);

type FragmentResult3335 = ResultOf<typeof FRAGMENT_3335>;
type FragmentSelf3335 = NonNullable<FragmentResult3335>;

export type FragmentToken3335 =
  | FragmentSelf3335["__typename"]
  | FragmentSelf3335["typenameHint"] | FragmentToken3333 | FragmentToken3334;
