import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3168 } from "./fragment3168";
import type { FragmentToken3169 } from "./fragment3169";

export const FRAGMENT_3170 = gql(`
  fragment Fragment3170 on Member89 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_89
    memberCount_89
    memberMetric_89
  }
`);

type FragmentResult3170 = ResultOf<typeof FRAGMENT_3170>;
type FragmentSelf3170 = NonNullable<FragmentResult3170>;

export type FragmentToken3170 =
  | FragmentSelf3170["__typename"]
  | FragmentSelf3170["typenameHint"] | FragmentToken3168 | FragmentToken3169;
