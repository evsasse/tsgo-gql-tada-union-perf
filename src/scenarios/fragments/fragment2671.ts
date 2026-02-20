import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2669 } from "./fragment2669";
import type { FragmentToken2670 } from "./fragment2670";

export const FRAGMENT_2671 = gql(`
  fragment Fragment2671 on Member150 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_150
    memberCount_150
    memberMetric_150
  }
`);

type FragmentResult2671 = ResultOf<typeof FRAGMENT_2671>;
type FragmentSelf2671 = NonNullable<FragmentResult2671>;

export type FragmentToken2671 =
  | FragmentSelf2671["__typename"]
  | FragmentSelf2671["typenameHint"] | FragmentToken2669 | FragmentToken2670;
