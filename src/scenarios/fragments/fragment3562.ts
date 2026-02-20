import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3560 } from "./fragment3560";
import type { FragmentToken3561 } from "./fragment3561";

export const FRAGMENT_3562 = gql(`
  fragment Fragment3562 on Member201 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_201
    memberCount_201
    memberMetric_201
  }
`);

type FragmentResult3562 = ResultOf<typeof FRAGMENT_3562>;
type FragmentSelf3562 = NonNullable<FragmentResult3562>;

export type FragmentToken3562 =
  | FragmentSelf3562["__typename"]
  | FragmentSelf3562["typenameHint"] | FragmentToken3560 | FragmentToken3561;
