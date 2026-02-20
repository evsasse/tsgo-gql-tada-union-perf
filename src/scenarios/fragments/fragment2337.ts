import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2335 } from "./fragment2335";
import type { FragmentToken2336 } from "./fragment2336";

export const FRAGMENT_2337 = gql(`
  fragment Fragment2337 on Member96 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_96
    memberCount_96
    memberMetric_96
  }
`);

type FragmentResult2337 = ResultOf<typeof FRAGMENT_2337>;
type FragmentSelf2337 = NonNullable<FragmentResult2337>;

export type FragmentToken2337 =
  | FragmentSelf2337["__typename"]
  | FragmentSelf2337["typenameHint"] | FragmentToken2335 | FragmentToken2336;
