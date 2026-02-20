import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2624 } from "./fragment2624";
import type { FragmentToken2625 } from "./fragment2625";

export const FRAGMENT_2626 = gql(`
  fragment Fragment2626 on Member105 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_105
    memberCount_105
    memberMetric_105
  }
`);

type FragmentResult2626 = ResultOf<typeof FRAGMENT_2626>;
type FragmentSelf2626 = NonNullable<FragmentResult2626>;

export type FragmentToken2626 =
  | FragmentSelf2626["__typename"]
  | FragmentSelf2626["typenameHint"] | FragmentToken2624 | FragmentToken2625;
