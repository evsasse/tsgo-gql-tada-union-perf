import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2394 } from "./fragment2394";
import type { FragmentToken2395 } from "./fragment2395";

export const FRAGMENT_2396 = gql(`
  fragment Fragment2396 on Member155 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_155
    memberCount_155
    memberMetric_155
  }
`);

type FragmentResult2396 = ResultOf<typeof FRAGMENT_2396>;
type FragmentSelf2396 = NonNullable<FragmentResult2396>;

export type FragmentToken2396 =
  | FragmentSelf2396["__typename"]
  | FragmentSelf2396["typenameHint"] | FragmentToken2394 | FragmentToken2395;
