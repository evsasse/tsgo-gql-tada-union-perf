import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3836 } from "./fragment3836";
import type { FragmentToken3837 } from "./fragment3837";

export const FRAGMENT_3838 = gql(`
  fragment Fragment3838 on Member197 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_197
    memberCount_197
    memberMetric_197
  }
`);

type FragmentResult3838 = ResultOf<typeof FRAGMENT_3838>;
type FragmentSelf3838 = NonNullable<FragmentResult3838>;

export type FragmentToken3838 =
  | FragmentSelf3838["__typename"]
  | FragmentSelf3838["typenameHint"] | FragmentToken3836 | FragmentToken3837;
