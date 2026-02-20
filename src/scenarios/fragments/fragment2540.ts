import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2538 } from "./fragment2538";
import type { FragmentToken2539 } from "./fragment2539";

export const FRAGMENT_2540 = gql(`
  fragment Fragment2540 on Member19 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_19
    memberCount_19
    memberMetric_19
  }
`);

type FragmentResult2540 = ResultOf<typeof FRAGMENT_2540>;
type FragmentSelf2540 = NonNullable<FragmentResult2540>;

export type FragmentToken2540 =
  | FragmentSelf2540["__typename"]
  | FragmentSelf2540["typenameHint"] | FragmentToken2538 | FragmentToken2539;
