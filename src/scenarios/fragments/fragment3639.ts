import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3637 } from "./fragment3637";
import type { FragmentToken3638 } from "./fragment3638";

export const FRAGMENT_3639 = gql(`
  fragment Fragment3639 on Member278 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_278
    memberCount_278
    memberMetric_278
  }
`);

type FragmentResult3639 = ResultOf<typeof FRAGMENT_3639>;
type FragmentSelf3639 = NonNullable<FragmentResult3639>;

export type FragmentToken3639 =
  | FragmentSelf3639["__typename"]
  | FragmentSelf3639["typenameHint"] | FragmentToken3637 | FragmentToken3638;
