import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3580 } from "./fragment3580";
import type { FragmentToken3581 } from "./fragment3581";

export const FRAGMENT_3582 = gql(`
  fragment Fragment3582 on Member221 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_221
    memberCount_221
    memberMetric_221
  }
`);

type FragmentResult3582 = ResultOf<typeof FRAGMENT_3582>;
type FragmentSelf3582 = NonNullable<FragmentResult3582>;

export type FragmentToken3582 =
  | FragmentSelf3582["__typename"]
  | FragmentSelf3582["typenameHint"] | FragmentToken3580 | FragmentToken3581;
