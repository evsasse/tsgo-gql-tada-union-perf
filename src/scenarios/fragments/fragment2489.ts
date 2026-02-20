import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2487 } from "./fragment2487";
import type { FragmentToken2488 } from "./fragment2488";

export const FRAGMENT_2489 = gql(`
  fragment Fragment2489 on Member248 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_248
    memberCount_248
    memberMetric_248
  }
`);

type FragmentResult2489 = ResultOf<typeof FRAGMENT_2489>;
type FragmentSelf2489 = NonNullable<FragmentResult2489>;

export type FragmentToken2489 =
  | FragmentSelf2489["__typename"]
  | FragmentSelf2489["typenameHint"] | FragmentToken2487 | FragmentToken2488;
