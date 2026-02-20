import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2622 } from "./fragment2622";
import type { FragmentToken2623 } from "./fragment2623";

export const FRAGMENT_2624 = gql(`
  fragment Fragment2624 on Member103 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_103
    memberCount_103
    memberMetric_103
  }
`);

type FragmentResult2624 = ResultOf<typeof FRAGMENT_2624>;
type FragmentSelf2624 = NonNullable<FragmentResult2624>;

export type FragmentToken2624 =
  | FragmentSelf2624["__typename"]
  | FragmentSelf2624["typenameHint"] | FragmentToken2622 | FragmentToken2623;
