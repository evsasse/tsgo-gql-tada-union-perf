import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3471 } from "./fragment3471";
import type { FragmentToken3472 } from "./fragment3472";

export const FRAGMENT_3473 = gql(`
  fragment Fragment3473 on Member112 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_112
    memberCount_112
    memberMetric_112
  }
`);

type FragmentResult3473 = ResultOf<typeof FRAGMENT_3473>;
type FragmentSelf3473 = NonNullable<FragmentResult3473>;

export type FragmentToken3473 =
  | FragmentSelf3473["__typename"]
  | FragmentSelf3473["typenameHint"] | FragmentToken3471 | FragmentToken3472;
