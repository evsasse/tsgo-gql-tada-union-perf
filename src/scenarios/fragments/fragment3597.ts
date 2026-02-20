import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3595 } from "./fragment3595";
import type { FragmentToken3596 } from "./fragment3596";

export const FRAGMENT_3597 = gql(`
  fragment Fragment3597 on Member236 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_236
    memberCount_236
    memberMetric_236
  }
`);

type FragmentResult3597 = ResultOf<typeof FRAGMENT_3597>;
type FragmentSelf3597 = NonNullable<FragmentResult3597>;

export type FragmentToken3597 =
  | FragmentSelf3597["__typename"]
  | FragmentSelf3597["typenameHint"] | FragmentToken3595 | FragmentToken3596;
