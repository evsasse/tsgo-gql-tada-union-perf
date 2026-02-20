import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2567 } from "./fragment2567";
import type { FragmentToken2568 } from "./fragment2568";

export const FRAGMENT_2569 = gql(`
  fragment Fragment2569 on Member48 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_48
    memberCount_48
    memberMetric_48
  }
`);

type FragmentResult2569 = ResultOf<typeof FRAGMENT_2569>;
type FragmentSelf2569 = NonNullable<FragmentResult2569>;

export type FragmentToken2569 =
  | FragmentSelf2569["__typename"]
  | FragmentSelf2569["typenameHint"] | FragmentToken2567 | FragmentToken2568;
