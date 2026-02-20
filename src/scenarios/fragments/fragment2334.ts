import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2332 } from "./fragment2332";
import type { FragmentToken2333 } from "./fragment2333";

export const FRAGMENT_2334 = gql(`
  fragment Fragment2334 on Member93 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_93
    memberCount_93
    memberMetric_93
  }
`);

type FragmentResult2334 = ResultOf<typeof FRAGMENT_2334>;
type FragmentSelf2334 = NonNullable<FragmentResult2334>;

export type FragmentToken2334 =
  | FragmentSelf2334["__typename"]
  | FragmentSelf2334["typenameHint"] | FragmentToken2332 | FragmentToken2333;
