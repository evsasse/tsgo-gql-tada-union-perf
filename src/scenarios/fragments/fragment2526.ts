import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2524 } from "./fragment2524";
import type { FragmentToken2525 } from "./fragment2525";

export const FRAGMENT_2526 = gql(`
  fragment Fragment2526 on Member05 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_05
    memberCount_05
    memberMetric_05
  }
`);

type FragmentResult2526 = ResultOf<typeof FRAGMENT_2526>;
type FragmentSelf2526 = NonNullable<FragmentResult2526>;

export type FragmentToken2526 =
  | FragmentSelf2526["__typename"]
  | FragmentSelf2526["typenameHint"] | FragmentToken2524 | FragmentToken2525;
