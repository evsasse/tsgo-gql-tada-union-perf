import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3900 } from "./fragment3900";
import type { FragmentToken3901 } from "./fragment3901";

export const FRAGMENT_3902 = gql(`
  fragment Fragment3902 on Member261 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_261
    memberCount_261
    memberMetric_261
  }
`);

type FragmentResult3902 = ResultOf<typeof FRAGMENT_3902>;
type FragmentSelf3902 = NonNullable<FragmentResult3902>;

export type FragmentToken3902 =
  | FragmentSelf3902["__typename"]
  | FragmentSelf3902["typenameHint"] | FragmentToken3900 | FragmentToken3901;
