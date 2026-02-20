import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2643 } from "./fragment2643";
import type { FragmentToken2644 } from "./fragment2644";

export const FRAGMENT_2645 = gql(`
  fragment Fragment2645 on Member124 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_124
    memberCount_124
    memberMetric_124
  }
`);

type FragmentResult2645 = ResultOf<typeof FRAGMENT_2645>;
type FragmentSelf2645 = NonNullable<FragmentResult2645>;

export type FragmentToken2645 =
  | FragmentSelf2645["__typename"]
  | FragmentSelf2645["typenameHint"] | FragmentToken2643 | FragmentToken2644;
