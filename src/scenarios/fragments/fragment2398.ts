import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2396 } from "./fragment2396";
import type { FragmentToken2397 } from "./fragment2397";

export const FRAGMENT_2398 = gql(`
  fragment Fragment2398 on Member157 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_157
    memberCount_157
    memberMetric_157
  }
`);

type FragmentResult2398 = ResultOf<typeof FRAGMENT_2398>;
type FragmentSelf2398 = NonNullable<FragmentResult2398>;

export type FragmentToken2398 =
  | FragmentSelf2398["__typename"]
  | FragmentSelf2398["typenameHint"] | FragmentToken2396 | FragmentToken2397;
