import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2911 } from "./fragment2911";
import type { FragmentToken2912 } from "./fragment2912";

export const FRAGMENT_2913 = gql(`
  fragment Fragment2913 on Member112 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_112
    memberCount_112
    memberMetric_112
  }
`);

type FragmentResult2913 = ResultOf<typeof FRAGMENT_2913>;
type FragmentSelf2913 = NonNullable<FragmentResult2913>;

export type FragmentToken2913 =
  | FragmentSelf2913["__typename"]
  | FragmentSelf2913["typenameHint"] | FragmentToken2911 | FragmentToken2912;
