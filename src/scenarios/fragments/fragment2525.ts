import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2523 } from "./fragment2523";
import type { FragmentToken2524 } from "./fragment2524";

export const FRAGMENT_2525 = gql(`
  fragment Fragment2525 on Member04 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_04
    memberCount_04
    memberMetric_04
  }
`);

type FragmentResult2525 = ResultOf<typeof FRAGMENT_2525>;
type FragmentSelf2525 = NonNullable<FragmentResult2525>;

export type FragmentToken2525 =
  | FragmentSelf2525["__typename"]
  | FragmentSelf2525["typenameHint"] | FragmentToken2523 | FragmentToken2524;
