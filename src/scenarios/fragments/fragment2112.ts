import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2110 } from "./fragment2110";
import type { FragmentToken2111 } from "./fragment2111";

export const FRAGMENT_2112 = gql(`
  fragment Fragment2112 on Member151 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_151
    memberCount_151
    memberMetric_151
  }
`);

type FragmentResult2112 = ResultOf<typeof FRAGMENT_2112>;
type FragmentSelf2112 = NonNullable<FragmentResult2112>;

export type FragmentToken2112 =
  | FragmentSelf2112["__typename"]
  | FragmentSelf2112["typenameHint"] | FragmentToken2110 | FragmentToken2111;
