import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3472 } from "./fragment3472";
import type { FragmentToken3473 } from "./fragment3473";

export const FRAGMENT_3474 = gql(`
  fragment Fragment3474 on Member113 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_113
    memberCount_113
    memberMetric_113
  }
`);

type FragmentResult3474 = ResultOf<typeof FRAGMENT_3474>;
type FragmentSelf3474 = NonNullable<FragmentResult3474>;

export type FragmentToken3474 =
  | FragmentSelf3474["__typename"]
  | FragmentSelf3474["typenameHint"] | FragmentToken3472 | FragmentToken3473;
