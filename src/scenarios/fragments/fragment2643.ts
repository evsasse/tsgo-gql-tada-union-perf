import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2641 } from "./fragment2641";
import type { FragmentToken2642 } from "./fragment2642";

export const FRAGMENT_2643 = gql(`
  fragment Fragment2643 on Member122 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_122
    memberCount_122
    memberMetric_122
  }
`);

type FragmentResult2643 = ResultOf<typeof FRAGMENT_2643>;
type FragmentSelf2643 = NonNullable<FragmentResult2643>;

export type FragmentToken2643 =
  | FragmentSelf2643["__typename"]
  | FragmentSelf2643["typenameHint"] | FragmentToken2641 | FragmentToken2642;
