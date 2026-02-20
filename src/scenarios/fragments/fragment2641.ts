import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2639 } from "./fragment2639";
import type { FragmentToken2640 } from "./fragment2640";

export const FRAGMENT_2641 = gql(`
  fragment Fragment2641 on Member120 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_120
    memberCount_120
    memberMetric_120
  }
`);

type FragmentResult2641 = ResultOf<typeof FRAGMENT_2641>;
type FragmentSelf2641 = NonNullable<FragmentResult2641>;

export type FragmentToken2641 =
  | FragmentSelf2641["__typename"]
  | FragmentSelf2641["typenameHint"] | FragmentToken2639 | FragmentToken2640;
