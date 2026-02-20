import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3123 } from "./fragment3123";
import type { FragmentToken3124 } from "./fragment3124";

export const FRAGMENT_3125 = gql(`
  fragment Fragment3125 on Member44 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_44
    memberCount_44
    memberMetric_44
  }
`);

type FragmentResult3125 = ResultOf<typeof FRAGMENT_3125>;
type FragmentSelf3125 = NonNullable<FragmentResult3125>;

export type FragmentToken3125 =
  | FragmentSelf3125["__typename"]
  | FragmentSelf3125["typenameHint"] | FragmentToken3123 | FragmentToken3124;
