import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3567 } from "./fragment3567";
import type { FragmentToken3568 } from "./fragment3568";

export const FRAGMENT_3569 = gql(`
  fragment Fragment3569 on Member208 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_208
    memberCount_208
    memberMetric_208
  }
`);

type FragmentResult3569 = ResultOf<typeof FRAGMENT_3569>;
type FragmentSelf3569 = NonNullable<FragmentResult3569>;

export type FragmentToken3569 =
  | FragmentSelf3569["__typename"]
  | FragmentSelf3569["typenameHint"] | FragmentToken3567 | FragmentToken3568;
