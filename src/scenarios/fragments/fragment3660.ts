import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3658 } from "./fragment3658";
import type { FragmentToken3659 } from "./fragment3659";

export const FRAGMENT_3660 = gql(`
  fragment Fragment3660 on Member19 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_19
    memberCount_19
    memberMetric_19
  }
`);

type FragmentResult3660 = ResultOf<typeof FRAGMENT_3660>;
type FragmentSelf3660 = NonNullable<FragmentResult3660>;

export type FragmentToken3660 =
  | FragmentSelf3660["__typename"]
  | FragmentSelf3660["typenameHint"] | FragmentToken3658 | FragmentToken3659;
