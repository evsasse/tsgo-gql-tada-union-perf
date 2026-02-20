import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3630 } from "./fragment3630";
import type { FragmentToken3631 } from "./fragment3631";

export const FRAGMENT_3632 = gql(`
  fragment Fragment3632 on Member271 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_271
    memberCount_271
    memberMetric_271
  }
`);

type FragmentResult3632 = ResultOf<typeof FRAGMENT_3632>;
type FragmentSelf3632 = NonNullable<FragmentResult3632>;

export type FragmentToken3632 =
  | FragmentSelf3632["__typename"]
  | FragmentSelf3632["typenameHint"] | FragmentToken3630 | FragmentToken3631;
