import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2623 } from "./fragment2623";
import type { FragmentToken2624 } from "./fragment2624";

export const FRAGMENT_2625 = gql(`
  fragment Fragment2625 on Member104 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_104
    memberCount_104
    memberMetric_104
  }
`);

type FragmentResult2625 = ResultOf<typeof FRAGMENT_2625>;
type FragmentSelf2625 = NonNullable<FragmentResult2625>;

export type FragmentToken2625 =
  | FragmentSelf2625["__typename"]
  | FragmentSelf2625["typenameHint"] | FragmentToken2623 | FragmentToken2624;
