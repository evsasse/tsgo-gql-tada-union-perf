import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2826 } from "./fragment2826";
import type { FragmentToken2827 } from "./fragment2827";

export const FRAGMENT_2828 = gql(`
  fragment Fragment2828 on Member27 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_27
    memberCount_27
    memberMetric_27
  }
`);

type FragmentResult2828 = ResultOf<typeof FRAGMENT_2828>;
type FragmentSelf2828 = NonNullable<FragmentResult2828>;

export type FragmentToken2828 =
  | FragmentSelf2828["__typename"]
  | FragmentSelf2828["typenameHint"] | FragmentToken2826 | FragmentToken2827;
