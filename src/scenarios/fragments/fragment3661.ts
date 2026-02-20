import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3659 } from "./fragment3659";
import type { FragmentToken3660 } from "./fragment3660";

export const FRAGMENT_3661 = gql(`
  fragment Fragment3661 on Member20 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_20
    memberCount_20
    memberMetric_20
  }
`);

type FragmentResult3661 = ResultOf<typeof FRAGMENT_3661>;
type FragmentSelf3661 = NonNullable<FragmentResult3661>;

export type FragmentToken3661 =
  | FragmentSelf3661["__typename"]
  | FragmentSelf3661["typenameHint"] | FragmentToken3659 | FragmentToken3660;
