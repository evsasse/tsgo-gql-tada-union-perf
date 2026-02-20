import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2825 } from "./fragment2825";
import type { FragmentToken2826 } from "./fragment2826";

export const FRAGMENT_2827 = gql(`
  fragment Fragment2827 on Member26 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_26
    memberCount_26
    memberMetric_26
  }
`);

type FragmentResult2827 = ResultOf<typeof FRAGMENT_2827>;
type FragmentSelf2827 = NonNullable<FragmentResult2827>;

export type FragmentToken2827 =
  | FragmentSelf2827["__typename"]
  | FragmentSelf2827["typenameHint"] | FragmentToken2825 | FragmentToken2826;
