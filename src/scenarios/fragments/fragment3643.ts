import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3641 } from "./fragment3641";
import type { FragmentToken3642 } from "./fragment3642";

export const FRAGMENT_3643 = gql(`
  fragment Fragment3643 on Member02 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_02
    memberCount_02
    memberMetric_02
  }
`);

type FragmentResult3643 = ResultOf<typeof FRAGMENT_3643>;
type FragmentSelf3643 = NonNullable<FragmentResult3643>;

export type FragmentToken3643 =
  | FragmentSelf3643["__typename"]
  | FragmentSelf3643["typenameHint"] | FragmentToken3641 | FragmentToken3642;
