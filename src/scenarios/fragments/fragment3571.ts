import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3569 } from "./fragment3569";
import type { FragmentToken3570 } from "./fragment3570";

export const FRAGMENT_3571 = gql(`
  fragment Fragment3571 on Member210 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_210
    memberCount_210
    memberMetric_210
  }
`);

type FragmentResult3571 = ResultOf<typeof FRAGMENT_3571>;
type FragmentSelf3571 = NonNullable<FragmentResult3571>;

export type FragmentToken3571 =
  | FragmentSelf3571["__typename"]
  | FragmentSelf3571["typenameHint"] | FragmentToken3569 | FragmentToken3570;
