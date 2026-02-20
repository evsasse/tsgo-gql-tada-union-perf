import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2718 } from "./fragment2718";
import type { FragmentToken2719 } from "./fragment2719";

export const FRAGMENT_2720 = gql(`
  fragment Fragment2720 on Member199 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_199
    memberCount_199
    memberMetric_199
  }
`);

type FragmentResult2720 = ResultOf<typeof FRAGMENT_2720>;
type FragmentSelf2720 = NonNullable<FragmentResult2720>;

export type FragmentToken2720 =
  | FragmentSelf2720["__typename"]
  | FragmentSelf2720["typenameHint"] | FragmentToken2718 | FragmentToken2719;
