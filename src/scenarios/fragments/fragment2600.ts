import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2598 } from "./fragment2598";
import type { FragmentToken2599 } from "./fragment2599";

export const FRAGMENT_2600 = gql(`
  fragment Fragment2600 on Member79 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_79
    memberCount_79
    memberMetric_79
  }
`);

type FragmentResult2600 = ResultOf<typeof FRAGMENT_2600>;
type FragmentSelf2600 = NonNullable<FragmentResult2600>;

export type FragmentToken2600 =
  | FragmentSelf2600["__typename"]
  | FragmentSelf2600["typenameHint"] | FragmentToken2598 | FragmentToken2599;
