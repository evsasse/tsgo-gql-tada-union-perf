import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2334 } from "./fragment2334";
import type { FragmentToken2335 } from "./fragment2335";

export const FRAGMENT_2336 = gql(`
  fragment Fragment2336 on Member95 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_95
    memberCount_95
    memberMetric_95
  }
`);

type FragmentResult2336 = ResultOf<typeof FRAGMENT_2336>;
type FragmentSelf2336 = NonNullable<FragmentResult2336>;

export type FragmentToken2336 =
  | FragmentSelf2336["__typename"]
  | FragmentSelf2336["typenameHint"] | FragmentToken2334 | FragmentToken2335;
