import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2651 } from "./fragment2651";
import type { FragmentToken2652 } from "./fragment2652";

export const FRAGMENT_2653 = gql(`
  fragment Fragment2653 on Member132 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_132
    memberCount_132
    memberMetric_132
  }
`);

type FragmentResult2653 = ResultOf<typeof FRAGMENT_2653>;
type FragmentSelf2653 = NonNullable<FragmentResult2653>;

export type FragmentToken2653 =
  | FragmentSelf2653["__typename"]
  | FragmentSelf2653["typenameHint"] | FragmentToken2651 | FragmentToken2652;
