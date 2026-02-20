import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2537 } from "./fragment2537";
import type { FragmentToken2538 } from "./fragment2538";

export const FRAGMENT_2539 = gql(`
  fragment Fragment2539 on Member18 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_18
    memberCount_18
    memberMetric_18
  }
`);

type FragmentResult2539 = ResultOf<typeof FRAGMENT_2539>;
type FragmentSelf2539 = NonNullable<FragmentResult2539>;

export type FragmentToken2539 =
  | FragmentSelf2539["__typename"]
  | FragmentSelf2539["typenameHint"] | FragmentToken2537 | FragmentToken2538;
