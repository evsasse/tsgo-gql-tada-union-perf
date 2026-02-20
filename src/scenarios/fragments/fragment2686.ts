import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2684 } from "./fragment2684";
import type { FragmentToken2685 } from "./fragment2685";

export const FRAGMENT_2686 = gql(`
  fragment Fragment2686 on Member165 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_165
    memberCount_165
    memberMetric_165
  }
`);

type FragmentResult2686 = ResultOf<typeof FRAGMENT_2686>;
type FragmentSelf2686 = NonNullable<FragmentResult2686>;

export type FragmentToken2686 =
  | FragmentSelf2686["__typename"]
  | FragmentSelf2686["typenameHint"] | FragmentToken2684 | FragmentToken2685;
