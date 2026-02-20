import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3233 } from "./fragment3233";
import type { FragmentToken3234 } from "./fragment3234";

export const FRAGMENT_3235 = gql(`
  fragment Fragment3235 on Member154 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_154
    memberCount_154
    memberMetric_154
  }
`);

type FragmentResult3235 = ResultOf<typeof FRAGMENT_3235>;
type FragmentSelf3235 = NonNullable<FragmentResult3235>;

export type FragmentToken3235 =
  | FragmentSelf3235["__typename"]
  | FragmentSelf3235["typenameHint"] | FragmentToken3233 | FragmentToken3234;
