import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2336 } from "./fragment2336";
import type { FragmentToken2337 } from "./fragment2337";

export const FRAGMENT_2338 = gql(`
  fragment Fragment2338 on Member97 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_97
    memberCount_97
    memberMetric_97
  }
`);

type FragmentResult2338 = ResultOf<typeof FRAGMENT_2338>;
type FragmentSelf2338 = NonNullable<FragmentResult2338>;

export type FragmentToken2338 =
  | FragmentSelf2338["__typename"]
  | FragmentSelf2338["typenameHint"] | FragmentToken2336 | FragmentToken2337;
