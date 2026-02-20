import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3829 } from "./fragment3829";
import type { FragmentToken3830 } from "./fragment3830";

export const FRAGMENT_3831 = gql(`
  fragment Fragment3831 on Member190 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_190
    memberCount_190
    memberMetric_190
  }
`);

type FragmentResult3831 = ResultOf<typeof FRAGMENT_3831>;
type FragmentSelf3831 = NonNullable<FragmentResult3831>;

export type FragmentToken3831 =
  | FragmentSelf3831["__typename"]
  | FragmentSelf3831["typenameHint"] | FragmentToken3829 | FragmentToken3830;
