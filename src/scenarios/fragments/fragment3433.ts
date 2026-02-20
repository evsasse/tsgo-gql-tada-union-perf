import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3431 } from "./fragment3431";
import type { FragmentToken3432 } from "./fragment3432";

export const FRAGMENT_3433 = gql(`
  fragment Fragment3433 on Member72 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_72
    memberCount_72
    memberMetric_72
  }
`);

type FragmentResult3433 = ResultOf<typeof FRAGMENT_3433>;
type FragmentSelf3433 = NonNullable<FragmentResult3433>;

export type FragmentToken3433 =
  | FragmentSelf3433["__typename"]
  | FragmentSelf3433["typenameHint"] | FragmentToken3431 | FragmentToken3432;
