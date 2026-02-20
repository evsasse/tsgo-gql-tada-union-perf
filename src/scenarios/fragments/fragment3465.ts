import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3463 } from "./fragment3463";
import type { FragmentToken3464 } from "./fragment3464";

export const FRAGMENT_3465 = gql(`
  fragment Fragment3465 on Member104 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_104
    memberCount_104
    memberMetric_104
  }
`);

type FragmentResult3465 = ResultOf<typeof FRAGMENT_3465>;
type FragmentSelf3465 = NonNullable<FragmentResult3465>;

export type FragmentToken3465 =
  | FragmentSelf3465["__typename"]
  | FragmentSelf3465["typenameHint"] | FragmentToken3463 | FragmentToken3464;
