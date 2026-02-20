import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3643 } from "./fragment3643";
import type { FragmentToken3644 } from "./fragment3644";

export const FRAGMENT_3645 = gql(`
  fragment Fragment3645 on Member04 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_04
    memberCount_04
    memberMetric_04
  }
`);

type FragmentResult3645 = ResultOf<typeof FRAGMENT_3645>;
type FragmentSelf3645 = NonNullable<FragmentResult3645>;

export type FragmentToken3645 =
  | FragmentSelf3645["__typename"]
  | FragmentSelf3645["typenameHint"] | FragmentToken3643 | FragmentToken3644;
