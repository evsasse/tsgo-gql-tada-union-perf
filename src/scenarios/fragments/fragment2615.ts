import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2613 } from "./fragment2613";
import type { FragmentToken2614 } from "./fragment2614";

export const FRAGMENT_2615 = gql(`
  fragment Fragment2615 on Member94 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_94
    memberCount_94
    memberMetric_94
  }
`);

type FragmentResult2615 = ResultOf<typeof FRAGMENT_2615>;
type FragmentSelf2615 = NonNullable<FragmentResult2615>;

export type FragmentToken2615 =
  | FragmentSelf2615["__typename"]
  | FragmentSelf2615["typenameHint"] | FragmentToken2613 | FragmentToken2614;
