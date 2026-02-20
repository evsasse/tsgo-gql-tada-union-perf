import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2572 } from "./fragment2572";
import type { FragmentToken2573 } from "./fragment2573";

export const FRAGMENT_2574 = gql(`
  fragment Fragment2574 on Member53 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_53
    memberCount_53
    memberMetric_53
  }
`);

type FragmentResult2574 = ResultOf<typeof FRAGMENT_2574>;
type FragmentSelf2574 = NonNullable<FragmentResult2574>;

export type FragmentToken2574 =
  | FragmentSelf2574["__typename"]
  | FragmentSelf2574["typenameHint"] | FragmentToken2572 | FragmentToken2573;
