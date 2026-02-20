import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3487 } from "./fragment3487";
import type { FragmentToken3488 } from "./fragment3488";

export const FRAGMENT_3489 = gql(`
  fragment Fragment3489 on Member128 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_128
    memberCount_128
    memberMetric_128
  }
`);

type FragmentResult3489 = ResultOf<typeof FRAGMENT_3489>;
type FragmentSelf3489 = NonNullable<FragmentResult3489>;

export type FragmentToken3489 =
  | FragmentSelf3489["__typename"]
  | FragmentSelf3489["typenameHint"] | FragmentToken3487 | FragmentToken3488;
