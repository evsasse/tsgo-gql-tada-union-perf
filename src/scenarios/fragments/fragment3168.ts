import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3166 } from "./fragment3166";
import type { FragmentToken3167 } from "./fragment3167";

export const FRAGMENT_3168 = gql(`
  fragment Fragment3168 on Member87 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_87
    memberCount_87
    memberMetric_87
  }
`);

type FragmentResult3168 = ResultOf<typeof FRAGMENT_3168>;
type FragmentSelf3168 = NonNullable<FragmentResult3168>;

export type FragmentToken3168 =
  | FragmentSelf3168["__typename"]
  | FragmentSelf3168["typenameHint"] | FragmentToken3166 | FragmentToken3167;
