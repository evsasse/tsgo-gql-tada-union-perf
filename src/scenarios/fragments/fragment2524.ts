import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2522 } from "./fragment2522";
import type { FragmentToken2523 } from "./fragment2523";

export const FRAGMENT_2524 = gql(`
  fragment Fragment2524 on Member03 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_03
    memberCount_03
    memberMetric_03
  }
`);

type FragmentResult2524 = ResultOf<typeof FRAGMENT_2524>;
type FragmentSelf2524 = NonNullable<FragmentResult2524>;

export type FragmentToken2524 =
  | FragmentSelf2524["__typename"]
  | FragmentSelf2524["typenameHint"] | FragmentToken2522 | FragmentToken2523;
