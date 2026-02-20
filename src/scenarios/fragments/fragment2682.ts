import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2680 } from "./fragment2680";
import type { FragmentToken2681 } from "./fragment2681";

export const FRAGMENT_2682 = gql(`
  fragment Fragment2682 on Member161 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_161
    memberCount_161
    memberMetric_161
  }
`);

type FragmentResult2682 = ResultOf<typeof FRAGMENT_2682>;
type FragmentSelf2682 = NonNullable<FragmentResult2682>;

export type FragmentToken2682 =
  | FragmentSelf2682["__typename"]
  | FragmentSelf2682["typenameHint"] | FragmentToken2680 | FragmentToken2681;
