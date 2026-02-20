import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3040 } from "./fragment3040";
import type { FragmentToken3041 } from "./fragment3041";

export const FRAGMENT_3042 = gql(`
  fragment Fragment3042 on Member241 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_241
    memberCount_241
    memberMetric_241
  }
`);

type FragmentResult3042 = ResultOf<typeof FRAGMENT_3042>;
type FragmentSelf3042 = NonNullable<FragmentResult3042>;

export type FragmentToken3042 =
  | FragmentSelf3042["__typename"]
  | FragmentSelf3042["typenameHint"] | FragmentToken3040 | FragmentToken3041;
